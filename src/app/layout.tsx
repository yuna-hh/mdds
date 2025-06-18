import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "./(providers)/_providers/QueryProvider";
import NotiflixProvider from "./(providers)/_providers/NotiflixProvider";

export const metadata: Metadata = {
  title: "물댄동산",
  description: "물댄동산 지출증빙 내역 사이트",
  metadataBase: new URL("https://md-ds.vercel.app/"),
  icons: {
    icon: "/logo/favicon.ico",
    apple: "/logo/logo-ios.png",
  },
  openGraph: {
    images: [
      {
        url: "/logo/mdds-og.png",
        alt: "물댄동산 지출증빙 내역 사이트",
      },
    ],
  },
  manifest: "/manifest.json",
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
