import React from 'react';
import {Link} from 'react-router-dom';

export default function GenerateQuote({ handleClick, quoteText, quoteAuthor, quoteGenre}) {
    return (
        <>
            <button onClick={handleClick}>Generate</button>
            <div>
                <p>{quoteText}</p>
            </div>
            <button>
                <Link to='/'>
                    <p><b>{quoteAuthor}</b></p>
                    <span>{quoteGenre}</span>
                </Link>
            </button>
        </>
    )
}