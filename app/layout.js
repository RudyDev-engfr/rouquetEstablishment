// app/layout.js
import GoogleAnalytics from "../lib/GoogleAnalytics";
import "./globals.css";

const GA_TRACKING_ID = "G-HYG8WM4QC6";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Etablissement Rouquet</title>
      </head>
      <body>
        {children}
        <GoogleAnalytics GA_TRACKING_ID={GA_TRACKING_ID} />
      </body>
    </html>
  );
}
