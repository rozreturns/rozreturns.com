import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/nav";
import Footer from "@/components/footer";
import StarsBackground from "@/components/stars-background";

export const metadata: Metadata = {
  title: "RozReturns",
  description:
    "RozReturns is a proprietary quantitative trading firm specializing in cutting-edge algorithm strategies across global markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="night">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hubot+Sans:ital,wght@0,200..900;1,200..900&family=Markazi+Text&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="font-sans">
        <StarsBackground />
        <div className="relative z-10">
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
