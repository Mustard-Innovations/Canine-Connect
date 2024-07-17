import React from 'react';
import Brand from './Brand';
import ImageSearch from '../Listings/ImageSearch';
import ShowCollection from './ShowCollection';
import Contact from './Contact';
import Advert from './Advert';

const BodyItems: React.FC = () => {
  

  return (
    <div className="bg-white">
      <Brand />
      <ShowCollection 
        title={'New Kids Collection'} 
        description={'We are proud of our new work and are happy to present them to you'} 
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
