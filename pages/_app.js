import Head from "next/head";
import Layout from '../src/components/Layout';
import Background from "../src/components/Background";
import "../src/css/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sorting Method Visualizer</title>
        <meta name="description" content="This is a visualization of how sorting methods work in computer science." />

        <link  href="/favicon.ico"  type="image/x-icon" rel="shortcut icon"/>
      </Head>
      <Background />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}