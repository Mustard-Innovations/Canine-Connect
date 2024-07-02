import React from 'react'
import { ArrowRightIcon,ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <div className="glass">
        <div className="md:p-24 p-1">
        <p className="mt-5 p-2 pt-6 ml-4 bg-black border h-20 w-12">logo</p>
        <p className="mt-5 ml-4"><span className="py-3 m-1 bg-black border text-xs">HOME</span>HOME KIT 21/22</p>
        <div className="md:text-9xl text-5xl font-bold m-5">
            LIVERPOOL
        </div>
        <div className="md:flex flex-1flex w-full flex-col lg:flex-row">
            <div className="card bg-base-300 rounded-box grid mx-5 flex-grow place-items-center">
            <div className="flex md:p-5">
                <video 
                className="w-48 m-2 justify-center" 
                controls 
                loop 
                autoPlay 
                src="https://www.youtube.com/shorts/BdapS2C6qPQ?feature=share">  
                </video>
                <p>
                <span className="font-bold text-xl">How Was Made?</span> <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod eligendi, labore sit dolorum tenetur, dolor nemo enim nesciunt autem, alias sunt numquam. Ullam, architecto fuga ducimus sint aperiam in tempora.
                </p>
            </div>
            </div>  
            <div className="divider lg:divider-horizontal"></div>
            <div className="card rounded-box grid mx-5 flex-grow place-items-center">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur iusto amet, iure est neque suscipit eaque, tempore nisi fugit aspernatur numquam, nobis optio laudantium. Quasi qui aperiam id harum.</p>
            <div className="flex">
                <button className="bg-white btn flex mr-14">
                SHOP NOW
                <ArrowRightIcon className="w-5 h-5" />
                </button>
                <div className="flex ml-14">
                <ArrowLeftCircleIcon className="w-12 h-13" />
                <ArrowRightCircleIcon className="w-12 h-13"/>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero