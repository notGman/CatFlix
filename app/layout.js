import "./globals.css";
import Head from "next/head";
import NavBar from "@/components/Navbar";

export const metadata = {
  title: "CatFlix",
  description: "Free movie website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favico.png" />
      </head>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <div className="w-full px-3 md:px-[20%] mt-5">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
