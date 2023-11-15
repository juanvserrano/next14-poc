import type { Metadata } from "next";
import { getServerSideHTMLReactElements } from "@xo-union/tk-ui-essentials/server";

import { ENV } from "@env";

import "@xo-union/tk-ui-essentials";

import "./globals.scss";
import { Shell } from "./Shell/Shell";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // {
  //   presets: ["development-env"],
  //   featureOptions: {
  //     // remoteFragments: false,
  //     // headerPageletPreload: false,
  //     // footerPageletPreload: false,
  //     // analytics: false,
  //     // pageletCore: false,
  //     consentManagement: true,
  //   },
  // }
  const serverSideHTML = getServerSideHTMLReactElements({
    debug: true,
    // presets: ["development-env"],
    featureOptions: {
      analytics: {
        writeKey: ENV.SEGMENT_APP_KEY,
      },
      consentManagement: false,
    },
  });

  return (
    <html lang="en">
      <head>{serverSideHTML.head}</head>

      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
