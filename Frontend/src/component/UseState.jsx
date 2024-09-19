import React, { useState } from 'react'

function UseState() {
    const [data, setData] = useState("ram")

    const updateData = () => {
        setData("SHivam")

    }
    const updateDataVariable = (a) => {
        setData(a)
    }

    console.log('render')
    return (
        <>
            <h1>Use state {data}</h1>
            <button onClick={updateData}>Update data</button>
            <button onClick={() => setData("raj")}>Update data</button>
            <button onClick={() => updateDataVariable("pn")}>Update data</button>
        </>
    )
}

export default UseState
