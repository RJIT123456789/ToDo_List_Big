import React, { useState } from 'react'

function HIdeShowAndToggle() {
    const [status, setStatus] = useState(true)
    return (
        <>
            <center>
                <h1>Hide, Show and Toggle in element ya tag</h1>
            </center>
            <br /><br /><br />
            <center>
                {
                    status ? <h1>Hello world</h1> : null
                }

                <button onClick={() => setStatus(false)}>Hide</button>
                <br /><br />
                <button onClick={() => setStatus(true)}>Show</button>

                <br /><br /><br />
                {/* Toggle  */}
                <button onClick={() => setStatus(!status)}>Toggle</button>



            </center>
        </>
    )
}

export default HIdeShowAndToggle
