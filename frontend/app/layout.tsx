import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SWE-MASTERCLASS | Vibe Coder to AI Product Engineer",
  description: "An intensive 18-week learning programme to master software engineering and AI product development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        {/* Fixed Navigation Drawer Shell */}
        <Sidebar />
        
        {/* Main Window Wrapper */}
        <div className="min-h-screen flex flex-col pl-0 md:pl-[220px]">
          <TopNav />
          <main className="flex-1 pt-[84px] md:pt-16 flex flex-col overflow-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

