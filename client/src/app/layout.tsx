import type { Metadata } from "next";
import "./globals.css";
import Provider from "./Provider";


export const metadata: Metadata = {
  title: "title",
  description: "site description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <Provider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {children}
        </Provider>
      </body>
    </html>
  );
}
