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
          href="https://fonts.googleapis.com/css2?family=Nova+Square&family=Turret+Road:wght@200;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-lato">
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
