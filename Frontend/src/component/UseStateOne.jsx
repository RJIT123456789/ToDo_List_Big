import React, { useState } from 'react'

function UseStateOne() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>UseStateONe</h1>
            <p>you clicked {count} time</p>
            <button onClick={() => setCount(count + 1)}>
                click me
            </button>
        </>
    )
}

export default UseStateOne
