import React from "react";
import Head from 'next/head'
import Header from "./header.js";
import Footer from "./footer.js";

import ChatwootWidget from './ChatwootWidget'
function Layout({ disabled, children }) {
    return <>{children}</>;
}

export default props => (
    <div className="App">
    <ChatwootWidget />
        <Head>
            <title>Top Chartered Accountant in Madhapur, Hyderabad, Telangana, India | CRR Corporte Services</title>
            <link rel="icon" href="/favicon-32x32.png" />
            
        </Head>
        <Header></Header>
        <Layout {...props} />
        <Footer></Footer>
    </div>
);
