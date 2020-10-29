import React from 'react';

export default function GenerateQuote({ handleClick, quoteText, quoteAuthor, quoteGenre}) {
    return (
        <>
            <button onClick={handleClick}>Generate</button>
            <div>
                <p>{quoteText}</p>
            </div>
            <button>
                <p><b>{quoteAuthor}</b></p>
                <span>{quoteGenre}</span>
            </button>
        </>
    )
}