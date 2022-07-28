import Head from "next/head";
import Layout from '../src/components/Layout';
import { ThemeProvider } from 'next-themes';
import "../src/css/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sorting Method Visualizer</title>
        <meta name="description" content="A visualization and explanation of how different sorting algorithms work." />
        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
        <link  href="/favicon.ico"  type="image/x-icon" rel="shortcut icon"/>
      </Head>
      <ThemeProvider
      defaultTheme = 'light'
      storageKey = 'theme' 
      >
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
    </>
  )
}
