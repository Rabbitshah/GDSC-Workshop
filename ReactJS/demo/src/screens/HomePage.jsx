import React, { useEffect, useState } from 'react'
import image from '../assets/Image1.jpg'
import Card from '../components/Cart'
import Loading from '../components/Loading'

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
    const [isLoading, setIsLoading] = useState(false)

    useEffect( ()=>{
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 10000);
    }, [])
    
  return (
    <div>
        {isLoading ? <Loading/> :
           <div className='flex flex-row'>
             {data.map((item,index) => (
                <div key={index}> 
                    <Card data={item}/>
                </div>
            ))}
           </div>
        }
    </div>
 
  )
}

export default HomePage
