import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import {API_KEY,CONTEXT_KEY} from '../.env.local'
import Response from '../Response'
import { useRouter } from 'next/router'
import SearchResult from '../components/SearchResult'



const Search = ({results}) => {
    const router = useRouter()
    console.log(results)
    return (
        <div>
            <Head>
                <title>{router.query.term}-Google Search</title>
            </Head>
            
            {/* header */}
            <Header />

            {/* search result  */}
            <SearchResult results={results} />

            {/* search image */}
            {/* <Images results={results} /> */}

        </div>
    )
}

export default Search

export async function getServerSideProps (context) {
    const useDummyData = false;

    const startIndex = context.query.start || "0";

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then((response)=> response.json());


    //After the server has rendered ... Pass the result to the client

    return {
        props:{
            results : data
        }
    }

}
