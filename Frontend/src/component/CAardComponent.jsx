import React from 'react'
import Card from './Card'
import img1 from '../../src/assets/image/01.jpg'
import img2 from '../../src/assets/image/02.jpg'
import img3 from '../../src/assets/image/03.jpg'
import img4 from '../../src/assets/image/04.jpg'


function CAardComponent() {
  return (
    <>
      <h1 className='heading'> Card gallery</h1>
      <div className='cardCamp'>
        <Card title="1" img={img1} />
        <Card title="2" img={img2} />
        <Card title="3" img={img3} />
        <Card title="4" img={img4} />

      </div>


    </>
  )
}

export default CAardComponent
