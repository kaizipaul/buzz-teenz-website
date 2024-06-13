import { montserrat } from "./fonts";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';


export const metadata = {
  title: "Teen Buzz Tanzania",
  description: "Creating exciting experiences",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
    </ViewTransitions>
  );
}
