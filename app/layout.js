import "./globals.css";
// import Nav from "../components/Nav";

export default function RootLayout({ children }) {
  return (
    <html lang='fr'>
      <body>
        {/* <Nav /> */}
        {children}
      </body>
    </html>
  );
}
