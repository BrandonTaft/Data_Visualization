import Head from "next/head";
import Layout from '../src/components/Layout';
import { ThemeProvider } from 'next-themes';
import "../src/css/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Data Sorting Visualizer</title>
        <meta name="description" content="An interactive visualization and explanation of different sorting algorithms in action.
        Including a complete walkthrough / tutorial of how the sorting algorithms work. The methods covered include quick sort,
        bubble sort, selection sort, insertion sort and many more to be added." />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="keywords" content="tutorial, data, visualization, algorithm, sort, quick sort, bubble sort, selection sort, insertion sort" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Data Sorting Visualizer" key="ogsitename" />
        <meta property="og:title" content="Data Sorting Visualizer" key="ogtitle" />
        <meta property="og:description" content="An interactive visualization and explanation of different sorting algorithms in action.
        Including a complete walkthrough / tutorial of how the sorting algorithms work. The methods covered include quick sort,
        bubble sort, selection sort, insertion sort and many more to be added." key="ogdesc" />
        <meta property="og:url" content="https://sage-nougat-85746e.netlify.app" key="ogurl" />
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
