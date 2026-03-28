import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI新谷 Dashboard",
  description: "BMS特化AIアシスタント ダッシュボード",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark">
      <body className="bg-gray-950 text-gray-100 antialiased" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
