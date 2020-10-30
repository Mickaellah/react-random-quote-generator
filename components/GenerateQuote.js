import React, { useCallback, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

export default function GenerateQuote() {
    const [ quote, setQuote ] = useState('');;

    const randomQuote = "https://quote-garden.herokuapp.com/api/v2/quotes/random";

    async function getQuotes() {
        const res = await fetch(randomQuote);
        const data = await res.json();
        console.log(data);

        setQuote(data.quote);
    }

    useEffect(() => {
        getQuotes();
    }, []);

    const handleClick = useCallback(e => {
        getQuotes();
    }, []);

    return (
        <>
            <button className="generate_bbtn" onClick={handleClick}>random<svg className="w-6 h-6" fill="none" width="16px" height="16px" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            </button>
            <div className="quote_text">
                <p>{quote.quoteText}</p>
            </div>
            <button className="button">
                <Link to='/quote/:id'>
                    <div className="bttn_text">
                        <div>
                            <p><b>{quote.quoteAuthor}</b></p>
                            <span>{quote.quoteGenre}</span>
                        </div>
                        <div>
                            <span>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" fill="white" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </span>
                        </div>
                    </div>
                </Link>
            </button>
        </>
    )
}