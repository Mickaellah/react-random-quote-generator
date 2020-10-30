import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const randomQuote = "https://quote-garden.herokuapp.com/api/v2/quotes/random";

export default function QuoteDetail() {
    const { id } = useParams();
    const [ quote, setQuote ] = useState({});

    async function getQuotes() {
        const res = await fetch(randomQuote);
        const data = await res.json();
        console.log(data);

        setQuote(data.quote);
    }

    useEffect(() => {
        getQuotes();
    }, [id]);

    if (!quote.quoteText) return null

    return (
        <>
            {quote.quoteAuthor ? <p>{quote.quoteText}</p> : ''}
        </>
    )
}