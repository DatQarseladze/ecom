import { Inter } from "next/font/google";
import Header from "../../components/Header";
import dynamic from "next/dynamic";
import { Providers } from "../../providers/Providers";
import SessionWrapper from "@/src/components/SessionWrapper";

const AppThemeProvider = dynamic(() => import("../../utils/AppThemeProvider"), {
  ssr: false,
});

import "./globals.css";
import Footer from "@/src/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Impex",
  description: "A sample Next.js application",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <SessionWrapper>
            <AppThemeProvider attribute="class">
              <Header />
              {children}
              <Footer />
            </AppThemeProvider>
          </SessionWrapper>
        </Providers>
      </body>
    </html>
  );
}
