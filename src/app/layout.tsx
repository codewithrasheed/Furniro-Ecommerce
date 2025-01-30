import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";
import LayoutWrapper from "@/components/LayoutWrapper";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-montserrat",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Furniro | Furniture Website",
  description:
    "This is a Furniture Website Furniro created with Next.js, Tailwind CSS, and custom CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${montserrat.className} ${poppins.className} antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
      <Script id="snipcart">
        {`
           window.SnipcartSettings = {
            publicApiKey: "NDk3MzJkNDQtZTMyOS00NDFlLWFkMGEtZTBjN2RkYTJkOTJmNjM4NzE2NDkyNzAzMDcxNjE4",
          loadStrategy: "on-user-interaction",
          };

          (function(){var c,d;(d=(c=window.SnipcartSettings).version)!=null||(c.version="3.0");
          var s,S;(S=(s=window.SnipcartSettings).timeoutDuration)!=null||(s.timeoutDuration=2750);
          var l,p;(p=(l=window.SnipcartSettings).domain)!=null||(l.domain="cdn.snipcart.com");
          var w,u;(u=(w=window.SnipcartSettings).protocol)!=null||(w.protocol="https");
          var m,g;(g=(m=window.SnipcartSettings).loadCSS)!=null||(m.loadCSS=!0);
          var y=window.SnipcartSettings.version.includes("v3.0.0-ci")||
          window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,f=["focus","mouseover","touchmove","scroll","keydown"];
          window.LoadSnipcart=o;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();
          function r(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(f.forEach(function(t){return document.addEventListener(t,o)}),setTimeout(o,window.SnipcartSettings.timeoutDuration)):o()}
          var a=!1;function o(){if(a)return;a=!0;let t=document.getElementsByTagName("head")[0],
          n=document.querySelector("#snipcart"),i=document.querySelector('src[src^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][src$="snipcart.js"]')),
          e=document.querySelector('link[href^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][href$="snipcart.css"]'));
          n||(n=document.createElement("div"),n.id="snipcart",n.setAttribute("hidden","true"),document.body.appendChild(n)),h(n),i||(i=document.createElement("script"),
          i.src="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.js"),
          i.async=!0,t.appendChild(i)),!e&&window.SnipcartSettings.loadCSS&&(e=document.createElement("link"),e.rel="stylesheet",e.type="text/css",
          e.href="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.css"),
          t.prepend(e)),f.forEach(function(v){return document.removeEventListener(v,o)})}function h(t){!y||(t.dataset.apiKey=window.SnipcartSettings.publicApiKey,
          window.SnipcartSettings.addProductBehavior&&(t.dataset.configAddProductBehavior=window.SnipcartSettings.addProductBehavior),
          window.SnipcartSettings.modalStyle&&(t.dataset.configModalStyle=window.SnipcartSettings.modalStyle),
          window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency),
          window.SnipcartSettings.templatesUrl&&(t.dataset.templatesUrl=window.SnipcartSettings.templatesUrl))}})();
        `}
      </Script>
    </html>
  );
}
