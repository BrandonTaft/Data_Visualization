import Head from "next/head";
import Layout from '../src/components/Layout';
import { ThemeProvider } from 'next-themes';
import "../src/css/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sorting Method Visualizer</title>
        <meta name="description" content="This is a visualization of how sorting methods work in computer science." />
        <link  href="/favicon.ico"  type="image/x-icon" rel="shortcut icon"/>
      </Head>
      <ThemeProvider 
      defaultTheme="light">
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
    </>
  )
}
