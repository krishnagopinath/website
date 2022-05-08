import { useLocation } from "@remix-run/react";
import { useEffect } from "react";
import * as gtag from "~/utils/gtags.client";

export const GTags = () => {
  const location = useLocation();

  useEffect(() => {
    gtag.pageview(location.pathname);
  }, [location]);


  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <script
        async
        id="gtag-init"
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
    </>
  );
};
