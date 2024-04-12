import Image from "next/image";
import Link from "next/link";
import ImageSearch from "./Components/Listings/ImageSearch";
import Search from "./Components/Listings/Search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <header>
        <nav className="bg-white text-black w-screen">
          <div className='items-center'>
            <div className="text-center">Cannine Connect</div>
            <form>
              <Search 
                // onSubmit={handleSubmit} 
                // placeholder="Custom Placeholder"
              />
            </form>
          </div>
          <div className="">
            <Link href=''>Men</Link>
            <Link href=''>Women</Link>
            <Link href=''>Kids</Link>
            <Link href=''>Brands</Link>
            <Link href=''>Order</Link>
            <Link href=''>Favourites</Link>
            <Link href='/login'>Sign In</Link>
          </div>
        </nav>
        <div className="h-screen">

        </div>
      </header>

      <div className="bg-white w-screen">
        <div className="flex flex-wrap">
          <ImageSearch />
        </div>

        <div className="items-center text-center bg-black m-10 p-10 ">
          <div className="text-3xl capitalize text-wrap">Subscribe to our newsletter</div>
          <p className="p-3">
            Top your email bellow and get the new notifications about Canine Connect
          </p>
          <form className='w-80 m-auto border-4 border-white justify-center flex items-center' action="">
            <input className="p-1" type="email" name="email" id="" placeholder="Add your email here"/>
            <button className="border-white bg-black" type="submit">
              <div>
                {/* Show arrow icon on smaller screens */}
                <div className="md:hidden">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    className="w-20 h-6"
                  >
                    <path 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" 
                    />
                  </svg>
                </div>
                {/* Show "Subscribe" text on larger screens */}
                <div className="hidden md:block">
                  <span>Subscribe</span>
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
      
      <footer className="lg:flex p-10">
        <nav>
          <div className="lg:flex p-5">
            <div className="p-5 font-bold text-3xl lg:mr-16">Canine Connect</div>
            <div className="grid p-5 lg:ml-16">
              <Link className="font-bold" href=''>Shop Online</Link>
              <Link href=''>New Collection</Link>
              <Link href=''>Categories</Link>
              <Link href=''>Gallery</Link>
            </div>
            <div className="grid p-5">
              <Link className="font-bold" href=''>Services</Link>
              <Link href=''>Interior design</Link>
              <Link href=''>Product Design</Link>
            </div>
            <div className="grid p-5 mr-16">
              <Link className="font-bold" href=''>About</Link>
              <Link href=''>Contact Us</Link>
              <Link href=''>Stores</Link>
              <Link href=''>FAQ</Link>
            </div>
            <div className="flex mx-10 lg:ml-16 p-5">
              <Link className="m-5 w-5" href=''><img src="https://cdn5.vectorstock.com/i/1000x1000/01/64/black-youtube-logo-on-a-transparent-background-vector-46200164.jpg" alt="Youtube" /></Link>
              <Link className='m-5 w-5' href=''><img  src="https://static.vecteezy.com/system/resources/previews/014/414/683/non_2x/instagram-black-logo-on-transparent-background-free-vector.jpg" alt="Instagram" /></Link>
              <Link className='m-5 w-5' href=''><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_IwDCXDaxU1bp2OlZTaVuOwhT0BIhZvRyRf9HI4b_A&s" alt="Twitter" /></Link>
            </div>
          </div>
          <p className="items-center pt-8 px-5 font-light text-xs text-center">&copy; 2022 picolab. Canine Connect All Rights Reserved</p>
        </nav>
      </footer>
    </main>
  );
}
