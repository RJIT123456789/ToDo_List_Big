import React from 'react'

function UpdateVaribale() {
    let data = "ram kumar"
    const updateData = (a) => {
        alert(a)
        let data = 'raj'
        alert(data)
    }
    console.log("rander component")

    return (
        <div>
            <h1>Update variable {data}</h1>
            <button onClick={updateData(34)}>Update data</button>
        </div>
    )
}

export default UpdateVaribale
