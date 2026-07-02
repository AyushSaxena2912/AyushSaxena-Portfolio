import "./globals.css";

import { Navbar, Footer } from "@/components/Export";
import ReduxProvider from "@/redux/ReduxProvider";

import NextUI from "@/components/NextUI";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Ayush Saxena",
  description:
    "Backend-focused full-stack developer and UI/UX designer, building scalable systems, responsive interfaces, and AI-powered products.",
  creator: "Ayush Saxena",
  authors: [{ name: "Ayush Saxena", url: "https://www.ayushsaxena.tech" }],
  applicationName: "Portfolio",
  keywords: ["ayush", "saxena", "portfolio", "website"],
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="bg-theme-white min-h-screen transition-colors duration-300">
          <Toaster position="top-center" />
          <NextUI>
            <Navbar />
            {children}
            <Footer />
          </NextUI>
        </body>
      </html>
    </ReduxProvider>
  );
}
