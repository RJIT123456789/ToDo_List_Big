import React from 'react'

function UseStateOne01() {
    const [count, setCount] = useState(0);
  return (
    <>
      <p>find factoreal function {count}</p>
      <button onClick={() => setCount(count + 1)}>
        clicked me
      </button>
    </>
  )
}

export default UseStateOne01
