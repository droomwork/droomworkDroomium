import React from 'react'
import Head from 'next/head'
import {Header} from '../../../components/Header'
import {Footer} from '../../../components/Footer'
import TechBizCard from '../../../components/Cards/Techbiz'


const TechBiz = ()=>(
    <div>
        <Head>
        <title>Tech To Business</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="description" content="Place the meta description text here."/>
        </Head>
        <Header/>
        <TechBizCard/>
        <Footer/>

    </div>
)

export default TechBiz;