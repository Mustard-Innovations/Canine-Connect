import React from 'react';
import Brand from './Brand';
import ImageSearch from '../Listings/ImageSearch';
import ShowCollection from './ShowCollection';
import Contact from './Contact';
import Advert from './Advert';

const BodyItems: React.FC = () => {
  const exampleItems = [
    {
      id: 1,
      title: 'Shoes!',
      description: 'If a dog chews shoes whose shoes does he choose?',
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    },
    {
      id: 2,
      title: 'Bag!',
      description: 'A bag is more than just an item.',
      imageUrl: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFnfGVufDB8fDB8fHww',
    },
    {
      id: 3,
      title: 'Watch!',
      description: 'Time waits for no one.',
      imageUrl: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      title: 'Sunglasses!',
      description: 'Cool shades for sunny days.',
      imageUrl: 'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      title: 'Hat!',
      description: 'A hat is a head covering.',
      imageUrl: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF0fGVufDB8fDB8fHww',
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
      <Advert />
      <div className="flex flex-wrap text-center justify-evenly">
        <ImageSearch />
      </div>
      <Contact />
    </div>
  );
}

export default BodyItems;
