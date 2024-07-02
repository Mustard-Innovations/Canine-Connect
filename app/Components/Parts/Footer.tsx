import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="lg:flex p-10">
      <nav>
        <div className="lg:flex p-5">
          <div className="p-5 font-bold text-3xl lg:mr-16">Canine Connect</div>
          <div className="grid p-5 lg:ml-16">
            <Link className="font-bold" href="">
              Shop Online
            </Link>
            <Link href="">New Collection</Link>
            <Link href="">Categories</Link>
            <Link href="">Gallery</Link>
          </div>
          <div className="grid p-5">
            <Link className="font-bold" href="">
              Services
            </Link>
            <Link href="">Interior design</Link>
            <Link href="">Product Design</Link>
          </div>
          <div className="grid p-5 mr-16">
            <Link className="font-bold" href="">
              About
            </Link>
            <Link href="">Contact Us</Link>
            <Link href="">Stores</Link>
            <Link href="">FAQ</Link>
          </div>
          <div className="flex mx-10 lg:ml-16 p-5">
            <Link className="m-5 w-5" href="">
              <img
                src="https://cdn5.vectorstock.com/i/1000x1000/01/64/black-youtube-logo-on-a-transparent-background-vector-46200164.jpg"
                alt="Youtube"
              />
            </Link>
            <Link className="m-5 w-5" href="">
              <img
                src="https://static.vecteezy.com/system/resources/previews/014/414/683/non_2x/instagram-black-logo-on-transparent-background-free-vector.jpg"
                alt="Instagram"
              />
            </Link>
            <Link className="m-5 w-5" href="">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_IwDCXDaxU1bp2OlZTaVuOwhT0BIhZvRyRf9HI4b_A&s"
                alt="Twitter"
              />
            </Link>
          </div>
        </div>
        <p className="items-center pt-8 px-5 font-light text-xs text-center">
          &copy; 2022 picolab. Canine Connect All Rights Reserved
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
