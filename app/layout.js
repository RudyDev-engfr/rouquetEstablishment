import { useEffect } from "react";
import { usePathname } from "next/navigation";
import * as gtag from "../lib/gtag";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url);
    };

    handleRouteChange(pathname);
    window.addEventListener("hashchange", e => handleRouteChange(window.location.pathname));
    window.addEventListener("popstate", e => handleRouteChange(window.location.pathname));

    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [pathname]);

  return (
    <>
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
            `,
          }}
        />
      </head>
      {children}
    </>
  );
}
