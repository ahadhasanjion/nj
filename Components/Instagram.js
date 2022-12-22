import React from 'react'
import image1 from './Assets/ig-img-1.jpeg'
import image2 from './Assets/ig-img-2.jpeg'
import image3 from './Assets/ig-img-3.jpeg'
import image4 from './Assets/ig-img-4.jpeg'
import image5 from './Assets/ig-img-5.jpeg'
import image6 from './Assets/ig-img-6.jpeg'
import Instagraming from './Instagraming'



const Instagram = () => {
  return (
    <div className='max-w-[1240px] text-center mx-auto py-24'>
      <p className='text-2xl font-bold'>Follow me on Instagram</p>
      <p className='pb-4'>@AHJ</p>
      <div className='grid grid-cols-2 md:grid-ols-3 lg:grid-cols-6 p-4 gap-4'>
        <Instagraming socialImag={image2} />
        <Instagraming socialImag={image2} />
        <Instagraming socialImag={image3} />
        <Instagraming socialImag={image4} />
        <Instagraming socialImag={image5} />
        <Instagraming socialImag={image6} />
      </div>
    </div>
  )
}

export default Instagram
