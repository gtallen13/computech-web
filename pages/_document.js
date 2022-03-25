import Document, { Html,Head, NextScript, Main } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
         
          {/* Nprogress css */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
