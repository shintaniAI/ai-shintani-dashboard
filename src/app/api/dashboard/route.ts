import { NextResponse } from "next/server";

const NOTION_API_KEY = process.env.NOTION_API_KEY || "";
const NOTION_DB_ID = process.env.NOTION_TASK_DB_ID || "2ab36b0a-9fe2-8131-b86f-c82bdd7d53f0";

interface NotionTask {
  title: string;
  status: string;
  priority: string;
  assignee: string;
  due: string | null;
}

async function fetchNotionTasks(): Promise<NotionTask[]> {
  if (!NOTION_API_KEY) return [];
  try {
    const res = await fetch(`https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${NOTION_API_KEY}`,
        "Notion-Version": "2025-09-03",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page_size: 50 }),
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (data.results || []).map((page: any) => {
      const props = page.properties || {};
      // Find title property
      const titleProp = Object.values(props).find((p: any) => p.type === "title") as any;
      const title = titleProp?.title?.[0]?.plain_text || "無題";
      // Find status
      const statusProp = Object.values(props).find((p: any) => p.type === "status" || p.name === "ステータス") as any;
      const status = statusProp?.status?.name || statusProp?.select?.name || "不明";
      // Find priority
      const priProp = Object.values(props).find((p: any) => p.name === "優先度") as any;
      const priority = priProp?.select?.name || priProp?.number?.toString() || "-";
      // Find assignee
      const assignProp = Object.values(props).find((p: any) => p.name === "担当") as any;
      const assignee = assignProp?.people?.[0]?.name || assignProp?.select?.name || "-";
      // Find due date
      const dueProp = Object.values(props).find((p: any) => p.type === "date" || p.name === "期限") as any;
      const due = dueProp?.date?.start || null;
      return { title, status, priority, assignee, due };
    });
  } catch {
    return [];
  }
}

export async function GET() {
  const notionTasks = await fetchNotionTasks();

  return NextResponse.json({
    notionTasks,
    updatedAt: new Date().toISOString(),
  });
}
