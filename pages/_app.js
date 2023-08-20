import Head from "next/head";
import Layout from '../src/components/Layout';
import { ThemeProvider } from 'next-themes';
import "../src/css/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Data Sorting Visualizer</title>
        <meta name="description" content="An interactive visualization of different sorting algorithms in computer science.
        Including a complete walkthrough of how the sorting algorithms work. The methods covered include quick sort,
        bubble sort, selection sort, insertion sort with more to be added." />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="keywords" content="tutorial, data, visualization, interactive, computer science, Javascript, algorithm, sort, quick sort, bubble sort, selection sort, insertion sort" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Data Sorting Visualizer" key="ogsitename" />
        <meta property="og:title" content="Data Sorting Visualizer" key="ogtitle" />
        <meta property="og:description" content="An interactive visualization of different sorting algorithms in computer science.
        Including a complete walkthrough of how the sorting algorithms work. The methods covered include quick sort,
        bubble sort, selection sort, insertion sort with more to be added." key="ogdesc" />
        <meta property="og:url" content="https://datasort.vercel.app" key="ogurl" />
        <meta property="og:image" content="/images/og-preview.png" key="ogimage" />
        <link href="/favicon.ico" type="image/x-icon" rel="shortcut icon" />
      </Head>
      <ThemeProvider
        defaultTheme='light'
        storageKey='theme'
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
