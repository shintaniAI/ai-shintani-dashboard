const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:scale-[1.01] transition-transform ${className}`}>
    {children}
  </div>
);

const StatusBadge = ({ status, color = "emerald" }: { status: string; color?: string }) => {
  const colors: Record<string, string> = {
    emerald: "bg-emerald-500",
    blue: "bg-blue-500",
    amber: "bg-amber-500",
    gray: "bg-gray-500",
  };
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-gray-400">
      <span className={`w-2 h-2 rounded-full ${colors[color] || colors.emerald} animate-pulse`} />
      {status}
    </span>
  );
};

const tools = [
  { icon: "💬", name: "Slack", status: "接続済み", color: "emerald" },
  { icon: "⚡", name: "n8n", status: "5インスタンス稼働", color: "emerald" },
  { icon: "📧", name: "Google Workspace", status: "Calendar / Gmail / Drive / Docs / Sheets", color: "emerald" },
  { icon: "📝", name: "Notion", status: "接続済み", color: "emerald" },
  { icon: "🐙", name: "GitHub", status: "接続済み", color: "emerald" },
  { icon: "▲", name: "Vercel", status: "接続済み", color: "emerald" },
  { icon: "🔧", name: "OpenClaw", status: "稼働中", color: "blue" },
];

const tasks = [
  { title: "HAYABUSAクライアント n8n基盤整備", status: "進行中", color: "blue" },
  { title: "interview-report-app 運用", status: "稼働中", color: "emerald" },
  { title: "ダッシュボード構築", status: "進行中", color: "blue" },
];

export default function Home() {
  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <Card className="flex flex-col sm:flex-row items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-gray-700/50 flex items-center justify-center text-5xl shrink-0">
          🧠
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold tracking-tight">AIShintani</h1>
          <StatusBadge status="稼働中" />
          <p className="text-gray-400 mt-1">BMS特化AIアシスタント</p>
        </div>
      </Card>

      {/* KGI / KPI */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">KGI</p>
          <p className="text-lg font-semibold">BookMarkStudioの利益の最大化</p>
        </Card>
        <Card>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">KPI 1 — 工数削減</p>
          <p className="text-2xl font-bold">42<span className="text-base font-normal text-gray-400"> / 100h</span></p>
          <div className="mt-3 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: "42%" }} />
          </div>
        </Card>
        <Card>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">KPI 2 — 稼働率</p>
          <p className="text-2xl font-bold">99.7<span className="text-base font-normal text-gray-400">%</span></p>
          <StatusBadge status="24時間稼働中" color="emerald" />
        </Card>
      </div>

      {/* Tools */}
      <Card>
        <h2 className="text-lg font-semibold mb-4">連携ツール</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {tools.map((t) => (
            <div key={t.name} className="bg-gray-900/50 border border-gray-700/30 rounded-xl p-4 hover:border-gray-600/50 transition-colors">
              <span className="text-2xl">{t.icon}</span>
              <p className="font-medium mt-2 text-sm">{t.name}</p>
              <StatusBadge status={t.status} color={t.color} />
            </div>
          ))}
        </div>
      </Card>

      {/* Tasks + Schedule */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold mb-4">タスクボード</h2>
          <div className="space-y-3">
            {tasks.map((t) => (
              <div key={t.title} className="flex items-center justify-between bg-gray-900/40 rounded-xl px-4 py-3">
                <span className="text-sm">{t.title}</span>
                <StatusBadge status={t.status} color={t.color} />
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold mb-4">スケジュール</h2>
          <div className="bg-gray-900/40 rounded-xl px-4 py-3 text-sm text-gray-400">
            <p>📅 次回MTG: 未定</p>
            <p className="text-xs text-gray-600 mt-2">Google Calendar連携予定</p>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 pt-4 pb-8">
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-600">
          <span>🖥 Xserver VPS (220.158.19.90)</span>
          <span>🐧 Ubuntu Linux</span>
          <span>⬢ Node v24.13.0</span>
          <span>🤖 Claude Opus 4</span>
        </div>
      </footer>
    </main>
  );
}
