import React from 'react'
import image from '../assets/Image1.jpg'


const Card = ({image,title,price,rating}) => {
  return (
      <div className=' h-screen w-screen flex flex-col items-center justify-center'>
        <div  className=' border border-black/100 p-5'>
            <div className='h-60 w-60'>
                <img src={image} className='h-full w-full' alt="" />
            </div>
            <div className='my-5 text-3xl space-y-2'>
                <p>{title}</p>
                <p>{price}</p>
                <p>rating {rating}</p>
            </div>
        </div>
    </div>
  )
}

export default Card
