/* eslint-disable @next/next/no-document-import-in-page */
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class DocumentComponent extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="shortcut icon" href="/assets/logo.png" type="image/png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&family=Satisfy&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
