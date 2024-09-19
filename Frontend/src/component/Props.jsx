import React from 'react'

function Props({ d, c }) {
    return (
        <div>
            <center><h1>Props</h1></center>
            <center>
                <h1>Name: {d}</h1>
            </center>
            <br /><br /><br /><br />
            <center>
                <h1>value:</h1>
                <h1>{c}</h1>
            </center>
        </div>
    )
}

export default Props
