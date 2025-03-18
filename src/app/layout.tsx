import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "./(providers)/_providers/QueryProvider";

export const metadata: Metadata = {
  title: "물댄동산",
  description: "물댄동산 지출증빙 내역 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="mim-h-screen">
        <QueryProvider>
          <main>{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}
