"use client";
import { useEffect, useState } from "react";

/* ── Pixel Art Avatars (CSS box-shadow technique) ── */
// Each pixel is 4px. Grid is 12x12. Colors defined per agent.
const P = 4; // pixel size

function pixelShadow(pixels: [number, number, string][]): string {
  return pixels.map(([x, y, c]) => `${x * P}px ${y * P}px 0 ${c}`).join(",");
}

// AIShintani - 🧠 Brain/CEO - green/emerald tones
const shintaniPixels: [number, number, string][] = [
  // Hair
  [4,0,"#1a1a2e"],[5,0,"#1a1a2e"],[6,0,"#1a1a2e"],[7,0,"#1a1a2e"],
  [3,1,"#1a1a2e"],[4,1,"#1a1a2e"],[5,1,"#1a1a2e"],[6,1,"#1a1a2e"],[7,1,"#1a1a2e"],[8,1,"#1a1a2e"],
  // Face
  [4,2,"#f0c8a0"],[5,2,"#f0c8a0"],[6,2,"#f0c8a0"],[7,2,"#f0c8a0"],
  [3,3,"#f0c8a0"],[4,3,"#f0c8a0"],[5,3,"#2d2d2d"],[6,3,"#f0c8a0"],[7,3,"#2d2d2d"],[8,3,"#f0c8a0"],
  [3,4,"#f0c8a0"],[4,4,"#f0c8a0"],[5,4,"#f0c8a0"],[6,4,"#f0c8a0"],[7,4,"#f0c8a0"],[8,4,"#f0c8a0"],
  [4,5,"#f0c8a0"],[5,5,"#d4856a"],[6,5,"#d4856a"],[7,5,"#f0c8a0"],
  // Body (suit + emerald tie)
  [3,6,"#10b981"],[4,6,"#10b981"],[5,6,"#059669"],[6,6,"#059669"],[7,6,"#10b981"],[8,6,"#10b981"],
  [2,7,"#10b981"],[3,7,"#10b981"],[4,7,"#10b981"],[5,7,"#047857"],[6,7,"#047857"],[7,7,"#10b981"],[8,7,"#10b981"],[9,7,"#10b981"],
  [2,8,"#10b981"],[3,8,"#10b981"],[4,8,"#10b981"],[5,8,"#10b981"],[6,8,"#10b981"],[7,8,"#10b981"],[8,8,"#10b981"],[9,8,"#10b981"],
  // Legs
  [4,9,"#1a1a2e"],[5,9,"#1a1a2e"],[6,9,"#1a1a2e"],[7,9,"#1a1a2e"],
  [4,10,"#1a1a2e"],[5,10,"#1a1a2e"],[6,10,"#1a1a2e"],[7,10,"#1a1a2e"],
];

// Dev - 👨‍💻 Coder - blue/indigo tones, headphones
const devPixels: [number, number, string][] = [
  [4,0,"#312e81"],[5,0,"#312e81"],[6,0,"#312e81"],[7,0,"#312e81"],
  [3,1,"#312e81"],[4,1,"#312e81"],[5,1,"#312e81"],[6,1,"#312e81"],[7,1,"#312e81"],[8,1,"#312e81"],
  [2,2,"#6366f1"],[4,2,"#f0c8a0"],[5,2,"#f0c8a0"],[6,2,"#f0c8a0"],[7,2,"#f0c8a0"],[9,2,"#6366f1"],
  [2,3,"#6366f1"],[3,3,"#f0c8a0"],[4,3,"#f0c8a0"],[5,3,"#3b82f6"],[6,3,"#f0c8a0"],[7,3,"#3b82f6"],[8,3,"#f0c8a0"],[9,3,"#6366f1"],
  [3,4,"#f0c8a0"],[4,4,"#f0c8a0"],[5,4,"#f0c8a0"],[6,4,"#f0c8a0"],[7,4,"#f0c8a0"],[8,4,"#f0c8a0"],
  [4,5,"#f0c8a0"],[5,5,"#d4856a"],[6,5,"#d4856a"],[7,5,"#f0c8a0"],
  [3,6,"#3b82f6"],[4,6,"#3b82f6"],[5,6,"#1d4ed8"],[6,6,"#1d4ed8"],[7,6,"#3b82f6"],[8,6,"#3b82f6"],
  [2,7,"#3b82f6"],[3,7,"#3b82f6"],[4,7,"#3b82f6"],[5,7,"#1e40af"],[6,7,"#1e40af"],[7,7,"#3b82f6"],[8,7,"#3b82f6"],[9,7,"#3b82f6"],
  [2,8,"#3b82f6"],[3,8,"#3b82f6"],[4,8,"#3b82f6"],[5,8,"#3b82f6"],[6,8,"#3b82f6"],[7,8,"#3b82f6"],[8,8,"#3b82f6"],[9,8,"#3b82f6"],
  [4,9,"#1e293b"],[5,9,"#1e293b"],[6,9,"#1e293b"],[7,9,"#1e293b"],
  [4,10,"#1e293b"],[5,10,"#1e293b"],[6,10,"#1e293b"],[7,10,"#1e293b"],
];

// Ops - 📋 Operations - amber/orange tones, clipboard
const opsPixels: [number, number, string][] = [
  [4,0,"#78350f"],[5,0,"#78350f"],[6,0,"#78350f"],[7,0,"#78350f"],
  [3,1,"#78350f"],[4,1,"#78350f"],[5,1,"#78350f"],[6,1,"#78350f"],[7,1,"#78350f"],[8,1,"#78350f"],
  [4,2,"#f0c8a0"],[5,2,"#f0c8a0"],[6,2,"#f0c8a0"],[7,2,"#f0c8a0"],
  [3,3,"#f0c8a0"],[4,3,"#f0c8a0"],[5,3,"#92400e"],[6,3,"#f0c8a0"],[7,3,"#92400e"],[8,3,"#f0c8a0"],
  [3,4,"#f0c8a0"],[4,4,"#f0c8a0"],[5,4,"#f0c8a0"],[6,4,"#f0c8a0"],[7,4,"#f0c8a0"],[8,4,"#f0c8a0"],
  [4,5,"#f0c8a0"],[5,5,"#d4856a"],[6,5,"#d4856a"],[7,5,"#f0c8a0"],
  [3,6,"#f59e0b"],[4,6,"#f59e0b"],[5,6,"#d97706"],[6,6,"#d97706"],[7,6,"#f59e0b"],[8,6,"#f59e0b"],
  [2,7,"#f59e0b"],[3,7,"#f59e0b"],[4,7,"#f59e0b"],[5,7,"#b45309"],[6,7,"#b45309"],[7,7,"#f59e0b"],[8,7,"#f59e0b"],[9,7,"#f59e0b"],
  [2,8,"#f59e0b"],[3,8,"#f59e0b"],[4,8,"#f59e0b"],[5,8,"#f59e0b"],[6,8,"#f59e0b"],[7,8,"#f59e0b"],[8,8,"#f59e0b"],[9,8,"#f59e0b"],
  [4,9,"#292524"],[5,9,"#292524"],[6,9,"#292524"],[7,9,"#292524"],
  [4,10,"#292524"],[5,10,"#292524"],[6,10,"#292524"],[7,10,"#292524"],
];

// Research - 🔬 Researcher - purple/violet, lab coat
const researchPixels: [number, number, string][] = [
  [4,0,"#581c87"],[5,0,"#581c87"],[6,0,"#581c87"],[7,0,"#581c87"],
  [3,1,"#581c87"],[4,1,"#581c87"],[5,1,"#581c87"],[6,1,"#581c87"],[7,1,"#581c87"],[8,1,"#581c87"],
  [4,2,"#f0c8a0"],[5,2,"#f0c8a0"],[6,2,"#f0c8a0"],[7,2,"#f0c8a0"],
  [3,3,"#f0c8a0"],[4,3,"#f0c8a0"],[5,3,"#7c3aed"],[6,3,"#f0c8a0"],[7,3,"#7c3aed"],[8,3,"#f0c8a0"],
  [3,4,"#f0c8a0"],[4,4,"#f5f5f5"],[5,4,"#f0c8a0"],[6,4,"#f0c8a0"],[7,4,"#f5f5f5"],[8,4,"#f0c8a0"],
  [4,5,"#f0c8a0"],[5,5,"#d4856a"],[6,5,"#d4856a"],[7,5,"#f0c8a0"],
  [3,6,"#f5f5f5"],[4,6,"#f5f5f5"],[5,6,"#a855f7"],[6,6,"#a855f7"],[7,6,"#f5f5f5"],[8,6,"#f5f5f5"],
  [2,7,"#f5f5f5"],[3,7,"#f5f5f5"],[4,7,"#f5f5f5"],[5,7,"#9333ea"],[6,7,"#9333ea"],[7,7,"#f5f5f5"],[8,7,"#f5f5f5"],[9,7,"#f5f5f5"],
  [2,8,"#f5f5f5"],[3,8,"#f5f5f5"],[4,8,"#f5f5f5"],[5,8,"#f5f5f5"],[6,8,"#f5f5f5"],[7,8,"#f5f5f5"],[8,8,"#f5f5f5"],[9,8,"#f5f5f5"],
  [4,9,"#374151"],[5,9,"#374151"],[6,9,"#374151"],[7,9,"#374151"],
  [4,10,"#374151"],[5,10,"#374151"],[6,10,"#374151"],[7,10,"#374151"],
];

const agentPixelData: Record<string, [number, number, string][]> = {
  AIShintani: shintaniPixels,
  Dev: devPixels,
  Ops: opsPixels,
  Research: researchPixels,
};

const PixelAvatar = ({ name, size = 48 }: { name: string; size?: number }) => {
  const pixels = agentPixelData[name] || shintaniPixels;
  const scale = size / (12 * P);
  return (
    <div className="pixel-avatar" style={{ width: size, height: size, position: "relative", overflow: "hidden" }}>
      <div
        style={{
          width: P,
          height: P,
          boxShadow: pixelShadow(pixels),
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          position: "absolute",
          top: 0,
          left: 0,
          imageRendering: "pixelated",
        }}
      />
    </div>
  );
};

/* ── UI Components ── */
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:scale-[1.01] transition-transform ${className}`}>
    {children}
  </div>
);

const StatusBadge = ({ status, color = "emerald" }: { status: string; color?: string }) => {
  const colors: Record<string, string> = {
    emerald: "bg-emerald-500", blue: "bg-blue-500", amber: "bg-amber-500",
    red: "bg-red-500", purple: "bg-purple-500", gray: "bg-gray-500", cyan: "bg-cyan-500",
  };
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-gray-400">
      <span className={`w-2 h-2 rounded-full ${colors[color] || colors.emerald} animate-pulse`} />
      {status}
    </span>
  );
};

/* ── Data ── */
const agents = [
  { name: "AIShintani", role: "CEO / メインエージェント", status: "稼働中", color: "emerald", desc: "BMS特化。タスク管理・クライアント対応・全体統括" },
  { name: "Dev", role: "開発エージェント", status: "待機中", color: "blue", desc: "コード実装・テスト・デプロイ" },
  { name: "Ops", role: "運用エージェント", status: "待機中", color: "blue", desc: "運用管理・タスク管理・進捗追跡" },
  { name: "Research", role: "調査エージェント", status: "待機中", color: "blue", desc: "技術調査・市場調査・情報収集" },
];

const tools = [
  { icon: "💬", name: "Slack", detail: "BMS Workspace", category: "通信" },
  { icon: "📱", name: "Chatwork", detail: "閲覧専用（加藤一輝ルーム）", category: "通信" },
  { icon: "📧", name: "Gmail", detail: "yugo.shintani02@gmail.com", category: "Google" },
  { icon: "📅", name: "Google Calendar", detail: "新谷+内村カレンダー", category: "Google" },
  { icon: "📁", name: "Google Drive", detail: "BMS Studioルートフォルダ", category: "Google" },
  { icon: "📄", name: "Google Docs", detail: "作成・編集", category: "Google" },
  { icon: "📊", name: "Google Sheets", detail: "読み書き", category: "Google" },
  { icon: "📽️", name: "Google Slides", detail: "作成・編集", category: "Google" },
  { icon: "⚡", name: "n8n", detail: "5インスタンス（voyage/202/digitool/ML/bm-studio）", category: "自動化" },
  { icon: "📝", name: "Notion", detail: "API直接接続（BMS + VOYAGE）", category: "自動化" },
  { icon: "🐙", name: "GitHub", detail: "shintaniAI（gh CLI認証済み）", category: "開発" },
  { icon: "▲", name: "Vercel", detail: "10プロジェクト管理", category: "開発" },
  { icon: "🎬", name: "Remotion", detail: "動画レンダリング環境", category: "開発" },
  { icon: "🤖", name: "OpenClaw", detail: "v2026.2.6-3 稼働中", category: "AI" },
  { icon: "🧪", name: "Claude Code", detail: "v2.1.71", category: "AI" },
  { icon: "🖼️", name: "Gemini 3 Pro Image", detail: "画像生成・編集", category: "AI" },
  { icon: "🎨", name: "OpenAI gpt-image-1.5", detail: "画像生成", category: "AI" },
  { icon: "🗣️", name: "OpenAI Whisper", detail: "音声文字起こし", category: "AI" },
  { icon: "🐦", name: "X (Twitter)", detail: "投稿・検索・削除", category: "SNS" },
  { icon: "🌐", name: "Brave Search", detail: "Web検索API", category: "インフラ" },
  { icon: "🖥️", name: "ブラウザ自動化", detail: "Playwright（スクショ・操作）", category: "インフラ" },
  { icon: "🔑", name: "SSH", detail: "Xserver VPS (220.158.19.90)", category: "インフラ" },
];
const toolCategories = ["通信", "Google", "自動化", "開発", "AI", "SNS", "インフラ"];

const n8nInstances = [
  { name: "voyage", url: "voyage.app.n8n.cloud", status: "稼働中", color: "emerald" },
  { name: "202", url: "202.xvps.jp", status: "稼働中", color: "emerald" },
  { name: "digitool", url: "local.digitool-lab.com", status: "稼働中", color: "emerald" },
  { name: "medical-logue", url: "medical-logue.xvps.jp", status: "稼働中", color: "emerald" },
  { name: "bm-studio", url: "bm-studio.xvps.jp", status: "稼働中", color: "emerald" },
];

/* AI新谷の内部タスク（TASKS.md由来） */
const aiTasks = [
  { title: "タスク管理システム構築", status: "DONE", priority: "1", assignee: "AIShintani" },
  { title: "AI新谷ダッシュボード構築・改善", status: "DOING", priority: "1", assignee: "AIShintani" },
  { title: "HAYABUSA n8n基盤整備", status: "DOING", priority: "1", assignee: "AIShintani" },
  { title: "LINE→Supabase メッセージ収集WF修正", status: "DOING", priority: "2", assignee: "AIShintani" },
  { title: "X(Twitter) 運用体制構築", status: "TODO", priority: "3", assignee: "AIShintani" },
  { title: "202 勤怠・タスク管理アプリ設計", status: "TODO", priority: "3", assignee: "AIShintani" },
];

const skills = [
  "google-calendar", "google-sheets", "google-drive", "gmail", "google-docs",
  "notion", "n8n", "slack", "github", "weather", "web-search", "web-fetch",
  "nano-banana-pro", "openai-image-gen", "openai-whisper-api", "video-frames",
  "oracle", "tmux", "coding-agent", "docker-essentials", "git-essentials",
  "memory-qdrant", "skill-creator", "clawhub", "healthcheck", "mcporter", "apple-ui",
];

/* ── Status helpers ── */
function taskStatusColor(s: string): string {
  const m: Record<string, string> = {
    "DONE": "emerald", "DOING": "blue", "TODO": "gray", "レビュー待ち": "amber",
    "進行中": "blue", "完了": "emerald", "未着手": "gray", "修正中": "amber",
    "稼働中": "emerald", "確認待ち": "amber", "準備中": "amber", "設計中": "purple",
  };
  return m[s] || "gray";
}

function taskStatusLabel(s: string): string {
  const m: Record<string, string> = { "DONE": "✅ 完了", "DOING": "🔄 進行中", "TODO": "📌 未着手", "レビュー待ち": "⏳ レビュー待ち" };
  return m[s] || s;
}

/* ── Notion live data type ── */
interface NotionTask { title: string; status: string; priority: string; assignee: string; due: string | null; }

export default function Home() {
  const [notionTasks, setNotionTasks] = useState<NotionTask[]>([]);
  const [lastUpdate, setLastUpdate] = useState<string>("");
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    fetch("/api/dashboard").then(r => r.json()).then(d => {
      setNotionTasks(d.notionTasks || []);
      setLastUpdate(d.updatedAt || "");
    }).catch(() => {});
    const t = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  const uptime = `${now.toLocaleDateString("ja-JP")} ${now.toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" })}`;

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <Card className="flex flex-col sm:flex-row items-center gap-6">
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border-2 border-emerald-500/30 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/10 overflow-hidden pixel-breathe">
          <PixelAvatar name="AIShintani" size={88} />
        </div>
        <div className="text-center sm:text-left flex-1">
          <h1 className="text-3xl font-bold tracking-tight">AIShintani</h1>
          <StatusBadge status="稼働中 — Claude Opus 4" />
          <p className="text-gray-400 mt-1">BMS (BookMarkStudio) 特化AIアシスタント</p>
          <p className="text-gray-500 text-xs mt-1">Owner: 新谷悠悟 / 内村尚城 — AIコンサル事業</p>
        </div>
        <div className="text-right text-xs text-gray-500 hidden sm:block">
          <p>157 セッション稼働中</p>
          <p>24h/365d 自律運用</p>
          <p className="mt-1 text-gray-600">{uptime}</p>
        </div>
      </Card>

      {/* KGI / KPI */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">🎯 KGI</p>
          <p className="text-lg font-semibold">BookMarkStudioの利益の最大化</p>
        </Card>
        <Card>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">📉 KPI 1 — 工数削減</p>
          <p className="text-2xl font-bold">42<span className="text-base font-normal text-gray-400"> / 100h</span></p>
          <div className="mt-3 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: "42%" }} />
          </div>
        </Card>
        <Card>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">⏱️ KPI 2 — 稼働率</p>
          <p className="text-2xl font-bold">99.7<span className="text-base font-normal text-gray-400">%</span></p>
          <StatusBadge status="24時間稼働中" color="emerald" />
        </Card>
      </div>

      {/* Agents */}
      <Card>
        <h2 className="text-lg font-semibold mb-4">🤖 エージェント一覧</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {agents.map((a) => (
            <div key={a.name} className="bg-gray-900/50 border border-gray-700/30 rounded-xl p-4 hover:border-gray-600/50 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-lg bg-gray-700/30 flex items-center justify-center overflow-hidden pixel-breathe">
                  <PixelAvatar name={a.name} size={48} />
                </div>
                <div>
                  <p className="font-semibold text-sm">{a.name}</p>
                  <p className="text-xs text-gray-500">{a.role}</p>
                </div>
              </div>
              <StatusBadge status={a.status} color={a.color} />
              <p className="text-xs text-gray-500 mt-2">{a.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Task Boards: 2 columns */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* AI新谷 Internal Tasks */}
        <Card>
          <h2 className="text-lg font-semibold mb-1">📋 AI新谷タスク</h2>
          <p className="text-xs text-gray-600 mb-4">TASKS.md — AI新谷の作業管理</p>
          <div className="space-y-2">
            {aiTasks.map((t) => (
              <div key={t.title} className="flex items-center justify-between bg-gray-900/40 rounded-xl px-4 py-3">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-xs font-mono text-gray-600 shrink-0">P{t.priority}</span>
                  <span className="text-sm truncate">{t.title}</span>
                </div>
                <StatusBadge status={taskStatusLabel(t.status)} color={taskStatusColor(t.status)} />
              </div>
            ))}
          </div>
        </Card>

        {/* Notion AI管理表 */}
        <Card>
          <h2 className="text-lg font-semibold mb-1">📊 Notion AI管理表</h2>
          <p className="text-xs text-gray-600 mb-4">クライアント向けタスク{lastUpdate ? ` — ${new Date(lastUpdate).toLocaleTimeString("ja-JP")} 更新` : ""}</p>
          {notionTasks.length > 0 ? (
            <div className="space-y-2">
              {notionTasks.map((t, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-900/40 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-xs font-mono text-gray-600 shrink-0">{t.priority || "-"}</span>
                    <span className="text-sm truncate">{t.title}</span>
                  </div>
                  <StatusBadge status={t.status} color={taskStatusColor(t.status)} />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-900/40 rounded-xl px-4 py-6 text-center">
              <p className="text-gray-500 text-sm">Notion DBと接続中…</p>
              <p className="text-gray-600 text-xs mt-1">環境変数 NOTION_API_KEY / NOTION_TASK_DB_ID を設定すると表示されます</p>
            </div>
          )}
        </Card>
      </div>

      {/* Connected Tools */}
      <Card>
        <h2 className="text-lg font-semibold mb-4">🔧 連携ツール <span className="text-sm font-normal text-gray-500">({tools.length})</span></h2>
        {toolCategories.map((cat) => (
          <div key={cat} className="mb-4">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{cat}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {tools.filter((t) => t.category === cat).map((t) => (
                <div key={t.name} className="bg-gray-900/50 border border-gray-700/30 rounded-xl px-3 py-2.5 hover:border-gray-600/50 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{t.icon}</span>
                    <p className="font-medium text-sm">{t.name}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 truncate">{t.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Card>

      {/* n8n Instances */}
      <Card>
        <h2 className="text-lg font-semibold mb-4">⚡ n8nインスタンス</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {n8nInstances.map((n) => (
            <div key={n.name} className="bg-gray-900/50 border border-gray-700/30 rounded-xl px-4 py-3">
              <p className="font-mono font-semibold text-sm">{n.name}</p>
              <p className="text-xs text-gray-500 truncate">{n.url}</p>
              <StatusBadge status={n.status} color={n.color} />
            </div>
          ))}
        </div>
      </Card>

      {/* Schedule + Skills */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold mb-4">📅 スケジュール</h2>
          <div className="space-y-2">
            <div className="bg-gray-900/40 rounded-xl px-4 py-3 text-sm">
              <p className="text-amber-400">📌 3/29 16:00 — HAYABUSA 本庄さん MTG</p>
            </div>
            <div className="bg-gray-900/40 rounded-xl px-4 py-3 text-sm text-gray-400">
              <p>📅 毎朝 08:00 — AI朝ニュースダイジェスト配信</p>
            </div>
            <div className="bg-gray-900/40 rounded-xl px-4 py-3 text-sm text-gray-400">
              <p>🔄 30分ごと — ハートビート（メール/カレンダー/タスク巡回）</p>
            </div>
            <p className="text-xs text-gray-600 mt-2">Google Calendar API連携済み</p>
          </div>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold mb-4">🧩 インストール済みスキル <span className="text-sm font-normal text-gray-500">({skills.length})</span></h2>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((s) => (
              <span key={s} className="bg-gray-900/50 border border-gray-700/30 rounded-lg px-2 py-1 text-xs text-gray-400 font-mono">{s}</span>
            ))}
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 pt-4 pb-8">
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-600">
          <span>🖥 Xserver VPS (220.158.19.90)</span>
          <span>🐧 Ubuntu 6.8.0-106-generic (x64)</span>
          <span>⬢ Node v24.13.0</span>
          <span>🤖 Claude Opus 4-6</span>
          <span>📡 OpenClaw v2026.2.6-3</span>
          <span>💾 157 sessions</span>
        </div>
      </footer>
    </main>
  );
}
