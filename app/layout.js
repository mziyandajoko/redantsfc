import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import SupportUs from '@/app/components/buttons/supportUs/page'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RED ANTS FC",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        {children}
        <div className=" flex float-end p-20">
        <SupportUs />
        </div>

      </body>
    </html>
  );
}
