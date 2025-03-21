import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en" data-theme="light">
       <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
		<link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <meta name="description" content="Saurabh Chaudhary's Portfolio - A showcase of my skills, projects, and experience." />
      <meta name="keywords" content="portfolio, developer, next.js, react, winui, flutter" />
      <meta name="author" content="Saurabh Chaudhary" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}