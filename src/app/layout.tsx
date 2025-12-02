import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "./header/page";

export const metadata: Metadata = {
  title: "Portfolio - Product Designer",
  description: "A portfolio website showcasing selected works and writings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>
        <Header />
          {children}
      </ClientBody>
    </html>
  );
}
