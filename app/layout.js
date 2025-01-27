// app/layout.js
import "./globals.css";
import Nav from "@components/Nav"; // Utilisation de l'alias défini dans jsconfig.json

export default function RootLayout({ children }) {
  return (
    <html lang='fr'>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
