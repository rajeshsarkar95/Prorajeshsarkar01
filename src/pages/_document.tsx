import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-theme="dark">
      <Head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* SEO meta */}
        <meta name="author" content="Rajesh Sarkar" />
        <meta
          name="keywords"
          content="Full Stack Developer, MERN Stack, React, Next.js, Node.js, MongoDB, TypeScript, Rajesh Sarkar, Uttar Pradesh"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rajesh Sarkar Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@rajeshsarkar" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
