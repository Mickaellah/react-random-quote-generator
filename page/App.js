import React, { useCallback, useEffect, useState } from 'react';
import GenerateQuote from '../components/GenerateQuote';
import {
	BrowserRouter as Router,
    Route,
} from 'react-router-dom';

export default function App() {
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
            <Router>
                <Route path="/" render={() => <GenerateQuote handleClick={handleClick} {...quote}/>} />
            </Router>
        </>
    )
}