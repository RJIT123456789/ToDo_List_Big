import React from 'react'

function Card(props) {
  console.log(props)
  return (
    <>
    <div className='card'>
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>

    </div>
    
    </>
   
  )
}

export default Card

