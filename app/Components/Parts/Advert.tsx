import React from 'react'

const Advert = () => {
  return (
    <div>
       <div className="md:flex justify-around p-6 text-black text-wrap m-6 mx-10 text-center">
            <div className='m-3'>
                <img 
                    className="m-auto w-10" 
                    src='https://cdn.vectorstock.com/i/1000v/54/85/train-delivery-icon-vector-2545485.avif' 
                    alt="logo"
                />
                <div className='font-bold'>Free shipping</div>
                <div className="text-xs px-10">Free all shipping worldwide, with applicable conditions.</div>
            </div>
            <div className='m-3'>
                <img 
                    className="m-auto w-10" 
                    src='https://cdn.vectorstock.com/i/1000x1000/10/74/pay-isolated-icon-simple-element-from-payment-vector-28231074.webp' 
                    alt="logo"
                />
                <div className='font-bold'>Secure payments</div>
                <div className="text-xs px-10">Payments with a guaranteed level of security, you dont have to worry.</div>
            </div>
            <div className='m-3'>
                <img 
                    className="m-auto w-10" 
                    src='https://cdn.vectorstock.com/i/1000x1000/03/41/nature-vector-450341.webp' 
                    alt="logo"
                />
                <div className='font-bold'>Best quality materials</div>
                <div className="text-xs px-10">Our products are made from at least 75% recycled polyester fibers.</div>
            </div>
        </div> 
    </div>
  )
}

export default Advert