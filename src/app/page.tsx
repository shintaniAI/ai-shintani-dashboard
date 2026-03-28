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
    red: "bg-red-500",
    purple: "bg-purple-500",
    gray: "bg-gray-500",
  };
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-gray-400">
      <span className={`w-2 h-2 rounded-full ${colors[color] || colors.emerald} animate-pulse`} />
      {status}
    </span>
  );
};

/* ── Agents ── */
const agents = [
  { emoji: "🧠", name: "AIShintani", role: "CEO / メインエージェント", status: "稼働中", color: "emerald", desc: "BMS特化。タスク管理・クライアント対応・全体統括" },
  { emoji: "👨‍💻", name: "Dev", role: "開発エージェント", status: "待機中", color: "blue", desc: "コード実装・テスト・デプロイ" },
  { emoji: "📋", name: "Ops", role: "運用エージェント", status: "待機中", color: "blue", desc: "運用管理・タスク管理・進捗追跡" },
  { emoji: "🔬", name: "Research", role: "調査エージェント", status: "待機中", color: "blue", desc: "技術調査・市場調査・情報収集" },
];

/* ── Tools ── */
const tools = [
  // コミュニケーション
  { icon: "💬", name: "Slack", detail: "BMS Workspace", category: "通信" },
  { icon: "📱", name: "Chatwork", detail: "閲覧専用（加藤一輝ルーム）", category: "通信" },
  // Google Workspace
  { icon: "📧", name: "Gmail", detail: "yugo.shintani02@gmail.com", category: "Google" },
  { icon: "📅", name: "Google Calendar", detail: "新谷+内村カレンダー", category: "Google" },
  { icon: "📁", name: "Google Drive", detail: "BMS Studioルートフォルダ", category: "Google" },
  { icon: "📄", name: "Google Docs", detail: "作成・編集", category: "Google" },
  { icon: "📊", name: "Google Sheets", detail: "読み書き", category: "Google" },
  { icon: "📽️", name: "Google Slides", detail: "作成・編集", category: "Google" },
  // 開発・自動化
  { icon: "⚡", name: "n8n", detail: "5インスタンス（voyage/202/digitool/ML/bm-studio）", category: "自動化" },
  { icon: "📝", name: "Notion", detail: "API直接接続（BMS + VOYAGE）", category: "自動化" },
  { icon: "🐙", name: "GitHub", detail: "shintaniAI（gh CLI認証済み）", category: "開発" },
  { icon: "▲", name: "Vercel", detail: "10プロジェクト管理", category: "開発" },
  { icon: "🎬", name: "Remotion", detail: "動画レンダリング環境", category: "開発" },
  // AI / 生成
  { icon: "🤖", name: "OpenClaw", detail: "v2026.2.6-3 稼働中", category: "AI" },
  { icon: "🧪", name: "Claude Code", detail: "v2.1.71", category: "AI" },
  { icon: "🖼️", name: "Gemini 3 Pro Image", detail: "画像生成・編集", category: "AI" },
  { icon: "🎨", name: "OpenAI gpt-image-1.5", detail: "画像生成", category: "AI" },
  { icon: "🗣️", name: "OpenAI Whisper", detail: "音声文字起こし", category: "AI" },
  // SNS / 外部
  { icon: "🐦", name: "X (Twitter)", detail: "投稿・検索・削除", category: "SNS" },
  // インフラ
  { icon: "🌐", name: "Brave Search", detail: "Web検索API", category: "インフラ" },
  { icon: "🖥️", name: "ブラウザ自動化", detail: "Playwright（スクショ・操作）", category: "インフラ" },
  { icon: "🔑", name: "SSH", detail: "Xserver VPS (220.158.19.90)", category: "インフラ" },
];

const toolCategories = ["通信", "Google", "自動化", "開発", "AI", "SNS", "インフラ"];

/* ── n8n instances ── */
const n8nInstances = [
  { name: "voyage", url: "voyage.app.n8n.cloud", status: "稼働中", color: "emerald" },
  { name: "202", url: "202.xvps.jp", status: "稼働中", color: "emerald" },
  { name: "digitool", url: "local.digitool-lab.com", status: "稼働中", color: "emerald" },
  { name: "medical-logue", url: "medical-logue.xvps.jp", status: "稼働中", color: "emerald" },
  { name: "bm-studio", url: "bm-studio.xvps.jp", status: "稼働中", color: "emerald" },
];

/* ── Tasks ── */
const tasks = [
  { title: "HAYABUSA n8n基盤整備", status: "進行中", color: "blue", priority: "P1" },
  { title: "ガーデンメーカー コンサル提案", status: "確認待ち", color: "amber", priority: "P1" },
  { title: "interview-report-app 運用", status: "稼働中", color: "emerald", priority: "P2" },
  { title: "AI新谷ダッシュボード構築", status: "進行中", color: "blue", priority: "P2" },
  { title: "LINE→Supabase メッセージ収集", status: "稼働中", color: "emerald", priority: "P2" },
  { title: "X(Twitter) 自動運用", status: "準備中", color: "amber", priority: "P3" },
  { title: "202 勤怠・タスク管理アプリ", status: "設計中", color: "purple", priority: "P3" },
];

/* ── Skills ── */
const skills = [
  "google-calendar", "google-sheets", "google-drive", "gmail", "google-docs",
  "notion", "n8n", "slack", "github", "weather", "web-search", "web-fetch",
  "nano-banana-pro", "openai-image-gen", "openai-whisper-api", "video-frames",
  "oracle", "tmux", "coding-agent", "docker-essentials", "git-essentials",
  "memory-qdrant", "skill-creator", "clawhub", "healthcheck", "mcporter",
  "apple-ui",
];

export default function Home() {
  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <Card className="flex flex-col sm:flex-row items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border-2 border-emerald-500/30 flex items-center justify-center text-6xl shrink-0">
          🧠
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
            <div className="h-full bg-blue-500 rounded-full" style={{ width: "42%" }} />
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
                <div className="w-12 h-12 rounded-full bg-gray-700/50 flex items-center justify-center text-2xl">
                  {a.emoji}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {n8nInstances.map((n) => (
            <div key={n.name} className="bg-gray-900/50 border border-gray-700/30 rounded-xl px-4 py-3">
              <p className="font-mono font-semibold text-sm">{n.name}</p>
              <p className="text-xs text-gray-500 truncate">{n.url}</p>
              <StatusBadge status={n.status} color={n.color} />
            </div>
          ))}
        </div>
      </Card>

      {/* Tasks + Schedule */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold mb-4">📋 タスクボード</h2>
          <div className="space-y-2">
            {tasks.map((t) => (
              <div key={t.title} className="flex items-center justify-between bg-gray-900/40 rounded-xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-gray-600">{t.priority}</span>
                  <span className="text-sm">{t.title}</span>
                </div>
                <StatusBadge status={t.status} color={t.color} />
              </div>
            ))}
          </div>
        </Card>
        <div className="space-y-4">
          <Card>
            <h2 className="text-lg font-semibold mb-4">📅 スケジュール</h2>
            <div className="space-y-2">
              <div className="bg-gray-900/40 rounded-xl px-4 py-3 text-sm">
                <p className="text-amber-400">📌 明日 3/29 16:00 — HAYABUSA 本庄さん MTG</p>
              </div>
              <div className="bg-gray-900/40 rounded-xl px-4 py-3 text-sm text-gray-400">
                <p>📅 毎朝 08:00 — AI朝ニュースダイジェスト配信</p>
              </div>
              <p className="text-xs text-gray-600 mt-2">Google Calendar API連携済み</p>
            </div>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold mb-4">🧩 スキル</h2>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((s) => (
                <span key={s} className="bg-gray-900/50 border border-gray-700/30 rounded-lg px-2 py-1 text-xs text-gray-400 font-mono">
                  {s}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 pt-4 pb-8">
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-600">
          <span>🖥 Xserver VPS (220.158.19.90)</span>
          <span>🐧 Ubuntu 6.8.0-106-generic (x64)</span>
          <span>⬢ Node v24.13.0</span>
          <span>🤖 Claude Opus 4-6</span>
          <span>📡 OpenClaw v2026.2.6-3</span>
          <span>💾 157 sessions active</span>
        </div>
      </footer>
    </main>
  );
}
