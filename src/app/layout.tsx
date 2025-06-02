import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "./(providers)/_providers/QueryProvider";
import NotiflixProvider from "./(providers)/_providers/NotiflixProvider";

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
      <body className="min-h-screen">
        <QueryProvider>
          <NotiflixProvider>
            <main>{children}</main>
          </NotiflixProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
