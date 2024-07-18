'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

const apiKey = "3aHkxAeszwU6Y7rCyFXHWknFOpU6zcqymSnG-x8NJEk";

interface ImageDetails {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  description: string;
  user: {
    name: string;
    portfolio_url: string;
  };
}

const fetchImageDetails = async (id: string): Promise<ImageDetails | null> => {
  const res = await fetch(`https://api.unsplash.com/photos/${id}?client_id=${apiKey}`);
  if (!res.ok) {
    return null;
  }
  const image = await res.json();
  return image;
};

const ProductDetails: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [image, setImage] = useState<ImageDetails | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (id) {
      fetchImageDetails(id).then((image) => {
        if (image) {
          setImage(image);
        } else {
          router.push('/404'); // Navigate to a 404 page if not found
        }
      });
    }
  }, [id, router]);

  if (!image) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <button onClick={() => router.back()} className="mb-4 p-2 bg-gray-300 rounded">Back</button>
      <div className="md:flex text-black">
        <img src={image.urls.regular} alt={image.alt_description} className="max-w-full md:w-2/3 h-auto" />
        <div className='md:px-5 md:mx-5'>
          <p className="text-2xl font-bold m-4">{image.description || 'No description available'}</p>
          <div className='flex justify-between mx-4'>
            <p className="mr-2">Uploaded by <a href={image.user.portfolio_url} className="underline">{image.user.name}</a></p>
            <div className='flex'>
              <StarIcon className='w-4 h-4 m-1' />
              <p className='font-bold mr-2'>4.5</p>
              <p>(100 Reviews)</p>
            </div>
          </div>
          <p className='mx-4 font-bold text-2xl'>$49.99</p>
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
              . Model is wearing size M, and is 4'9" (144cm approx.)
              <br />
              . Standard fit for a relaxed, easy feel
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
            <p className='font-bold text-lg'>Review (100 Reviews)</p>
            <ChevronDownIcon className='w-8 h-8' />
          </div>
          <div className="collapse-content">
            <div>
              <p className='my-4'>
                <span className='font-semibold'>Jason Smith</span>
                <br />
                <div className='flex m-1'>
                  <StarIcon className='h-3 w-3' />
                  <StarIcon className='h-3 w-3' />
                  <StarIcon className='h-3 w-3' />
                  <StarIcon className='h-3 w-3' />
                  <StarIcon className='h-3 w-3' />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sequi dolorem illum aspernatur maxime sapiente ullam laborum odio, ad cupiditate eaque maiores a reprehenderit sunt fuga odit quae. Doloremque, incidunt?</p>
              </p>
              <p className='my-4'>
                <span className='font-semibold'>Wilson Armella</span>
                <br />
                <div className='flex m-1'>
                  <StarIcon className='h-3 w-3' />
                  <StarIcon className='h-3 w-3' />
                  <StarIcon className='h-3 w-3' />
                  <StarIcon className='h-3 w-3' />
                  <StarIcon className='h-3 w-3' />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sequi dolorem illum aspernatur maxime sapiente ullam laborum odio, ad cupiditate eaque maiores a reprehenderit sunt fuga odit quae. Doloremque, incidunt?</p>
              </p>
              <p className='my-4'>
                <span className='font-semibold'>Ajax Simpson</span>
                <br />
                <div className='flex m-1'>
                  <StarIcon className='h-3 w-3' />
                  <StarIcon className='h-3 w-3' />
                  <StarIcon className='h-3 w-3' />
                  <StarIcon className='h-3 w-3' />
                  <StarIcon className='h-3 w-3' />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sequi dolorem illum aspernatur maxime sapiente ullam laborum odio, ad cupiditate eaque maiores a reprehenderit sunt fuga odit quae. Doloremque, incidunt?</p>
              </p>
              <button className='w-2/3 p-5 border m-5 '>SEE ALL REVIEW</button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ProductDetails;
