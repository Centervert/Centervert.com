import Script from "next/script";

const PIXEL_ID = "867092523068501";

type PixelEvent = "PageView" | "Lead";

type Props = {
  event?: PixelEvent;
};

export function MetaPixel({ event = "PageView" }: Props) {
  return (
    <>
      <Script id={`meta-pixel-${event.toLowerCase()}`} strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', '${event}');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=${event}&noscript=1`}
        />
      </noscript>
    </>
  );
}
