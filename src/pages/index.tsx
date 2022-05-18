import { GetStaticProps} from "next"
import Head from "next/head"
import { stripe } from "../services/stripe"
import React from 'react';

import { SubscribeButton } from "../components/SignInButton/Subscribebutton"

import styles from './home.module.scss'


interface HomeProps{
    product: {
        priceId:string,
        amount:React.ReactNode,
    }
    
}

export default function Home({ product}: HomeProps){
    return (
        <>
     
                <Head>
        <title>Home | ig.news</title>
                </Head >
        <main className={styles.contentContainer}>
            <section className={styles.hero}>
                <span>👏 Hey, welcome</span>
                <h1>News aboult<br /> the <span>React</span> world.</h1>
                <>
                <p>
                Get access to all the publications  for <br />   <span>{product.amount} month</span>
                </p>
                
                   </>
                
                <SubscribeButton priceId={product.priceId} />
            </section>

            <img src="/images/avatar.svg" alt="Girl Coding" />
        </main>
               
            
        </>
    )
}

export const getStaticProps : GetStaticProps = async () =>{

const price = await stripe.prices.retrieve("price_1KvWAzAnvbEtSNXFR37MNCSe")


const product = {
    priceId: price.id,
    amount:  Intl.NumberFormat('en-US',{
        style: 'currency',
        currency:'USD'
    }).format(price.unit_amount / 100),
};

return {
    props:{
        product,
    },
    revalidate: 60 * 60 * 24, //24 hours
}


}


