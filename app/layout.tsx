import type { Metadata } from "next";
import { Noto_Serif_SC, Noto_Sans_SC } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const notoSerif = Noto_Serif_SC({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const notoSans = Noto_Sans_SC({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "夜讀文學 - 沉浸式文學閱讀體驗",
  description: "專為成人讀者打造的高質感文學閱讀平台，提供優雅私密的閱讀環境。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <body
        className={`${notoSerif.variable} ${notoSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
