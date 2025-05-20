import { montserrat } from "./fonts";
import "./globals.css";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';


export const metadata = {
  title: "Teen Buzz Tanzania",
  description: "Creating exciting experiences",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${montserrat.className} animated-background h-screen bg-gradient-to-r from-indigo-900 via-indigo-900 to-violet-900`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
