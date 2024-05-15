import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Teen Buzz Tanzania",
  description: "Creating exciting experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
