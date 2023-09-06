// pages/_app.js

import '../styles/globals.css';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>STOCKBROKER GOLD</title>
                <meta name="description" content="" />
                <meta name="keywords" content="Laze, leisure, redefined, pestemal, turkish towel" />
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/img/laze_icon.png" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;