import React from 'react'
import Brand from './Brand'
import ImageSearch from '../Listings/ImageSearch'
import ShowCollection from './ShowCollection'
import Contact from './Contact'
import { title } from 'process'

const BodyItems = () => {
  const exampleItems = [
    {
      id: 1,
      title: 'Shoes!',
      description: 'If a dog chews shoes whose shoes does he choose?',
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    },
    {
      id: 2,
      title: '',
      description: '',
      imageUrl: '',
    },
    {
      id: 3,
      title: '',
      description: '',
      imageUrl: '',
    },
    {
      id: 4,
      title: '',
      description: '',
      imageUrl: ''
    },
    {
      id: 5,
      title: '',
      description: '',
      imageUrl: ''
    }
  ];

  return (
    <div className="bg-white">
        <Brand />
        <ShowCollection 
          title={'New Kids Collection'} 
          description={'We are proud of our new work and are happy to present them to you'} 
          items={exampleItems} 
        />
        <div className="flex flex-wrap text-center justify-evenly">
            <ImageSearch />
        </div>
        <Contact />
    </div>
  )
}

export default BodyItems