import React from 'react'
import image from '../assets/Image1.jpg'
import Card from '../components/Cart'

const HomePage = () => {
  return (
    <div className='flex flex-row'>
        <Card image={image} title={"hiii"}/>
        <Card image={image}/>
        <Card image={image}/>
        <Card image={image}/>
        <Card image={image}/>
    </div>
 
  )
}

export default HomePage
