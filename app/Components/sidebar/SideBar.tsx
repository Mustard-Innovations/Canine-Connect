'use client'
import React, { useState, useEffect } from "react";

const SideBar = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "https://cdn.vectorstock.com/i/1000x1000/03/41/nature-vector-450341.webp",
            title: "Best quality materials",
            description: "Our products are made from at least 75% recycled polyester fibers."
        },
        {
            image: "https://cdn.vectorstock.com/i/1000x1000/10/74/pay-isolated-icon-simple-element-from-payment-vector-28231074.webp",
            title: "Secure payments",
            description: "Payments with a guaranteed level of security, you dont have to worry."
        },
        {
            image: "https://cdn.vectorstock.com/i/1000v/54/85/train-delivery-icon-vector-2545485.avif",
            title: "Free shipping",
            description: "Free all shipping worldwide, with applicable conditions."
        }
        // Add more slides here as needed
    ];

    // Function to move to the next slide
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    // Function to move to the previous slide
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    // Automatically switch slides every 5 seconds
    useEffect(() => {
        const intervalId = setInterval(nextSlide, 10000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Run only once on component mount

    return (
        <div>
            <div className="m-auto text-center lg:w-1/3">
                <div className="py-14 text-3xl font-bold my-10 mt-20  m-auto">
                    Canine Connect.
                </div>
                <div className="h-20 my-5"></div>
                <div className="whitespace-nowrap text-center w-full">
                    <div className='inline-block p-5 overflow-hidden'>
                        {/* Render current slide */}
                        <img className="m-auto w-10" src={slides[currentSlide].image} alt="logo" />
                        <div>{slides[currentSlide].title}</div>
                        <div className="font-light text-xs text-wrap p-3">{slides[currentSlide].description}</div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button onClick={prevSlide}></button>
                    <button onClick={nextSlide}></button>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
