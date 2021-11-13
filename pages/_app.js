import Head from "next/head";

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Chalmers Leaderboards: Tracking records in Chalmers since 1829
        </title>
        
        <meta
          name="description"
          content="Chalmers Leaderboards is a tool for keeping score of records or tournaments at Chalmers University of Technology."
        />
        <meta property="og:title" content="Chalmers Leaderboards"></meta>
        <meta
          property="og:description"
          content="Keep score of records and tournaments."
        ></meta>

        {/* Next.js complains if this isn't here */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;