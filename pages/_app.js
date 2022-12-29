import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>LWDW!</title>
        <meta name="theme-color" content="#000" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
