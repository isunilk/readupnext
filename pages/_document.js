import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <meta
          name="keywords"
          content="book recommendations, recommend a book, recommended reads, readupnext"
        /> */}
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@readupnext"/>
        {/* <meta name="twitter:image" content="https://www.readupnext.com/opengraph_image.png"/> */}
        {/* <meta name="twitter:image:alt" content="PSGC API Banner"/> */}
        {/* <meta property="og:image" content="https://www.readupnext.com/opengraph_image.png" /> */}
        {/* <meta property="og:image:secure_url" content="https://www.readupnext.com/opengraph_image.png" />  */}
        {/* <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" /> */}
        {/* <meta property="og:image:alt" content="Discover Your Next Recommended Book"/> */}
        <meta property="og:locale" content="en_US"/>
        <meta name="p:domain_verify" content="9becc15609688644d48d8a0135a312d9"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
