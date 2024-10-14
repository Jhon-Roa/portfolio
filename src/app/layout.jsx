import localFont from "next/font/local";
import NavBar from "@/components/navbar";
import "./globals.css";

const chakraPetch = localFont({
  src: "./fonts/chakraPetch.ttf",
  variable: "--font-chakra-petch",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${chakraPetch.variable} antialiased`}
      >
        <NavBar/>

        {children}
      </body>
    </html>
  );
}
