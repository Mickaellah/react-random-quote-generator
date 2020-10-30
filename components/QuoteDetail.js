import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

const randomQuote = "https://quote-garden.herokuapp.com/api/v2/authors/";
const author = '?page=1&limit=10';

export default function QuoteDetail() {
    const { authorName } = useParams();
    const [ quote, setQuote ] = useState([]);


    async function getQuotes() {
        const res = await fetch(randomQuote + authorName + author);
        const data = await res.json();
        console.log(data.quotes);
        setQuote(data.quotes);
    }

    useEffect(() => {
        getQuotes();
    }, []);

    const handleClick = useCallback(() => {
        getQuotes();
    }, []);

    return (
        <>
            <button className="generate_bbtn" onClick={handleClick}>
                random <svg className="w-6 h-6" fill="none" width="16px" height="16px" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            </button>
            {quote.map((quote) => {
                return <ul>
                    <li key={quote.authorName}>console.log({quote.quoteText});</li>
                </ul>
            })}
        </>
    )
}