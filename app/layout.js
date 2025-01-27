// app/layout.js
import "./globals.css";
import Nav from "@components/Nav";

export default function RootLayout({ children }) {
  return (
    <html lang='fr'>
      <body>
        <Nav />
        <main className='main-content'>{children}</main>
      </body>
    </html>
  );
}
