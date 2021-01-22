import React from 'react'
import Head from 'next/head'
import {Header} from '../../../components/Header'
import {Footer} from '../../../components/Footer'
import Stories from '../../../components/Cards/Stories'


const StartUp = ()=>(
    <div>
        <Head>
        <title>StartUp Stories</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="description" content="Place the meta description text here."/>
        </Head>
        <Header/>
        <Stories/>
        <Footer/>
    </div>
)

export default StartUp;