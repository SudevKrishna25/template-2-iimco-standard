import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  weight: ['400', '500', '600'],
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'ARASS | Excellence in Medical & Clinical Education',
  description: 'ARASS is a premier institution dedicated to advancing medical and clinical education, shaping the future of healthcare leadership globally.',
  openGraph: {
    title: 'ARASS | Excellence in Medical & Clinical Education',
    description: 'ARASS is a premier institution dedicated to advancing medical and clinical education.',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable}`} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-open-sans)' }}>
        <Header />
        <main style={{ flex: 1, marginTop: '90px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
