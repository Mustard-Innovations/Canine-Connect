// app/product-details/[id]/ProductDetails.tsx

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeftCircleIcon, StarIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

interface CollectionItem {
  size: string;
  price: number;
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
  numberOfReviews: number;
}

interface ProductDetailProps {
  item: CollectionItem;
}

const ProductDetails: React.FC<ProductDetailProps> = ({ item }) => {
  const router = useRouter();

  return (
    <div className="p-8 md:mx-10">
      <button onClick={() => router.back()} className="mb-4 p-2 bg-gray-300 rounded flex items-center">
        <ArrowLeftCircleIcon className='w-6 h-6 mr-2' />
        Back
      </button>
      <div className="md:flex text-black">
        <img src={item.imageUrl} alt={item.title} className="max-w-full md:w-2/3 h-auto" />
        <div className='md:px-5 md:mx-5'>
          <p className="text-2xl font-bold m-4">{item.description}</p>
          <div className='flex justify-between mx-4'>
            <p className="mr-2">Casual wear</p>
            <div className='flex'>
              <StarIcon className='w-4 h-4 m-1' />
              <p className='font-bold mr-2'>{item.rating ?? 0}</p>
              <p>({item.numberOfReviews ?? 'N/A'} Reviews)</p>
            </div>
          </div>
          <p className='mx-4 font-bold text-2xl'>${item.price ?? 'N/A'}</p>
          <hr className='bordered my-5 w-full' />
          <div>
            <div className='flex justify-between m-4'>
              <p className='font-semibold'>Select Size</p>
              <p>Size Guide</p>
            </div>
            <div className='m-4 mb-5'> 
              <button className='btn mr-2 px-6'>XS</button>
              <button className='btn m-2 px-7'>S</button>
              <button className='btn m-2 px-7'>M</button>
              <button className='btn m-2 px-7'>L</button>
              <button className='btn m-2 md:m-0 px-6'>XL</button>
            </div>
          </div>
          <div className='text-center my-7 m-5'>
            <button className='w-full p-2 m-1 border text-white bg-black'>ADD TO BAG</button>
            <button className='w-full p-2 m-1 border'>FAVOURITE</button>
          </div>
        </div>
      </div>
      <div className='text-black my-10 md:w-2/3'>
        <p className='my-5 font-bold'>Detail Product</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nobis atque veniam soluta sequi ipsa. Omnis dolores impedit accusantium commodi vitae temporibus dolor facere? Eveniet delectus accusantium ut unde dolore!</p>
        <p className='m-5'>
          . Color Shown: Black/White
          <br />
          . Style DB2567-011
        </p>
        <hr />

        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title flex justify-between">
            <p className='font-bold text-lg'>Select Size</p>
            <ChevronDownIcon className='w-8 h-8' />
          </div>
          <div className="collapse-content">
            <p className='m-5'>
              . Model is wearing size {item.size}, and is 4'9" (144cm approx.)
              <br />
              . Standart fit for a relaxed, easy feel
            </p>
          </div>
        </div>

        <hr />

        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title flex justify-between">
            <p className='font-bold text-lg'>Free Delivery & Return</p>
            <ChevronDownIcon className='w-8 h-8' />
          </div>
          <div className="collapse-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis quam placeat, officia veniam tenetur. Odio ea possimus aliquid harum, iusto architecto eius qui magni itaque, praesentium neque quibusdam autem.</p>
          </div>
        </div>

        <hr />

        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title flex justify-between">
            <p className='font-bold text-lg'>How This Was Made</p>
            <ChevronDownIcon className='w-8 h-8' />
          </div>
          <div className="collapse-content">
            <p className='m-5'>
              . Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias optio rerum atque explicabo tempore provident labore ipsam saepe, enim in consequuntur natus sit eius incidunt a placeat itaque hic? Corrupti!
              <br />
              . Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim debitis quaerat vero, rem perspiciatis repellendus eum veritatis nostrum, porro nobis ea. Aperiam, doloribus obcaecati. Expedita at quaerat totam aut!
              <br />
              . Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam commodi, error accusamus officiis cum modi, fuga eum voluptas assumenda mollitia. Omnis tempore consequuntur dicta ad sapiente atque, eius molestias?
            </p>
          </div>
        </div>

        <hr />

        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title flex justify-between">
            <p className='font-bold text-lg'>Review ({item.numberOfReviews ?? 'N/A'} Reviews)</p>
            <ChevronDownIcon className='w-8 h-8' />
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ProductDetails;
