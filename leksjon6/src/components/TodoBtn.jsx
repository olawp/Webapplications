import React from 'react';

export default function TodoBtn({setStatus}) {
    const text = "+ Todo";

    return (
        <section>
            <button>{text}</button>
        </section>
    )
}