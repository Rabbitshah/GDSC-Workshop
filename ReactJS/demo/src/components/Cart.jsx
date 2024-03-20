import React from 'react'
// import image from '../assets/Image1.jpg'


const Card = ({data}) => {
    const {image, title, price, rating, keywords } = data;
    return (
        <div className=' h-screen p-5 flex flex-col items-center justify-center'>
        <div  className=' border border-black/100 p-5'>
            <div className='h-60 w-60'>
                <img src={image} className='h-full w-full' alt="" />
            </div>
            <div className='my-5 text-3xl space-y-2'>
                <p>{title}</p>
                <p>{price}</p>
                <p>rating: {rating}</p>
                <div>{keywords.map((i,index) =>(
                    <div key={index}>
                    <p>{i}</p>
                    </div>
                ))}</div>
            </div>
        </div>
    </div>
  )
}

export default Card
