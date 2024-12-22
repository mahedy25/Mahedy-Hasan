
import { Inter  } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";



const inter  = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata = {
  title: "Mahedy Hasan",
  description: "It is the portfolio website of Mahedy Hasan.I specalize in HTML, CSS, Tailwind CSS, JavaScript, React, Next.js & Framer-motion to create best front-end website for you.",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased `}>
       <Navbar/>
        
        <main className="w-full xl:px-32 md:py-8">
         {children}
        </main>
        
       <Footer/>
      </body>
    </html>
  );
}
