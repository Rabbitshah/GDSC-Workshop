import React from 'react'
import image from '../assets/Image1.jpg'
import Card from '../components/Cart'

const data = [
    {
        id:1,
        image: image,
        title: "Hoodie",
        price: "$50",
        rating: "7",
        keywords:[
            "nasfjfdmfa",
            "asdanifoalekdf"
        ]
    },
    {
        id:2,
        image: image,
        title: "Hoodie",
        price:" $50",
        rating: "7",
        keywords:[
            "nasfjfdmfa",
            "asdanifoalekdf"
        ]
    },
    {
        id:3,
        image: image,
        title: "Hoodie",
        price: "$50",
        rating: "7",
        keywords:[
            "nasfjfdmfa",
            "asdanifoalekdf"
        ]
    },
]

const HomePage = () => {
  return (
    <div className='flex flex-row'>
        {data.map((item,index) => (
            <div key={index}> 
                <Card data={item}/>
            </div>
        ))}
    </div>
 
  )
}

export default HomePage
