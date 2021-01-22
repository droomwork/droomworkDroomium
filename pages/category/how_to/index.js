import React from 'react'
import Head from 'next/head';
import {Header} from '../../../components/Header'
import {Footer} from '../../../components/Footer'
import Card from '../../../components/Cards/How_to'


const HowTo = ()=>(
    <div>
        <Head>
        <title>How To's</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="description" content="Place the meta description text here."/>
        </Head>
        <Header/>
        <Card/>
        <Footer/>
    </div>
)

export default HowTo;


