import React from 'react'


const MyFun = () => {
    let age = 20;
    if(age >= 18){
        return(
            <>
            <h1>you are eligible to vote</h1>
            </>
        )
    }else{
        return(
            <>
            <h1>you are not eligible to vote</h1>
            </>
        )
    }
}

function ConditionRendering() {
    let age = 30;
    let result;

    if(age > 18){
        result = <h1>You can vote</h1>
    }
    else{
        result = <h1>You cannot vote</h1>
    }
  return (
    <>
      <h1>hello {result}</h1>
      < MyFun />
      {/* ternary operater  */}
      <div>
        {
            age > 18 ? <h1> you can eligible for vote</h1> : <h1>you cannot eligible for vote </h1>
        }
      </div>
    </>
  )
}

export default ConditionRendering
