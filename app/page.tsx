import Image from "next/image";
import Link from "next/link";
import ImageSearch from "./Components/Listings/ImageSearch";
import { 
  MagnifyingGlassIcon, 
  ShoppingBagIcon, 
  HeartIcon, 
  ArrowRightIcon,
  ArrowLeftCircleIcon, 
  ArrowRightCircleIcon,
  PlayCircleIcon
} from '@heroicons/react/24/outline'
import Search from "./Components/Listings/Search";

export default function Home() {
  const username = 'Pristia';
  const date = 2024;



  return (
    <main className="flex min-h-screen flex-col items-center">
      <header>
        <nav className="bg-white text-black w-screen">
          {/* small screen desplay */}
          <div className="navbar md:hidden">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-3 shadow bg-white w-screen">
                  <p className="m-5 font-bold">Menu</p> 
                  <div className="mx-3">
                    <div className="avatar">
                      <div className="w-24 m-3 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>  
                      <div>
                        <p className="mt-5 font-semibold">Hi, {username}</p>
                        <p className="">Member since {date}</p>
                      </div>
                    </div>
                    <label className="input input-bordered flex items-center gap-2 mr-8 mt-5">
                      <input type="text" className="grow" placeholder="Search" />
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                  </div> 
                  <li><a>Homepage</a></li>
                  <li><a>Portfolio</a></li>
                  <li><a>About</a></li>
                </ul>
              </div>
            </div>
            <div className="navbar-center">
              <a className="btn btn-ghost text-xl">Canine Connect</a>
            </div>
            <div className="navbar-end">
              <button className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>
            </div>
          </div>
          {/* larger screen display */}
          <div className="hidden md:navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Item 1</a></li>
                  <li>
                    <a>Parent</a>
                    <ul className="p-2">
                      <li><a>Submenu 1</a></li>
                      <li><a>Submenu 2</a></li>
                    </ul>
                  </li>
                  <li><a>Item 3</a></li>
                </ul>
              </div>
              <a className="btn btn-ghost text-xl">Canine Connect</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li><Link href=''>Men</Link></li>
                <li><Link href=''>Women</Link></li>
                <li><Link href=''>Kids</Link></li>
                <li><Link href=''>Brands</Link></li>
              </ul>
            </div>
            <div className="navbar-end">
              <MagnifyingGlassIcon className="h-5 w-5 mx-5" />
              <ShoppingBagIcon className="h-5 w-5 mx-5" />
              <HeartIcon className="h-5 w-5 m-5" />
              <Link href="/login" className="mx-5">Sign In</Link>
              {/* Search bar, orders, favourites and sign in */}
            </div>
          </div>
        </nav>


        <div className="glass">
          <div className="p-10">
            <p className="mt-5 p-2 pt-6 ml-4 bg-black border h-20 w-12">logo</p>
            <p className="mt-5 ml-4"><span className="py-3 m-1 bg-black border text-xs">HOME</span>HOME KIT 21/22</p>
            <div className="md:text-9xl md:w-full text-7xl font-bold m-5">
              LIVERPOOL
            </div>
            <div className="md:flex flex-1flex w-full flex-col lg:flex-row">
              <div className="card bg-base-300 rounded-box grid mx-5 flex-grow place-items-center">
                <div className="flex md:p-5">
                  <video src="">
                    <PlayCircleIcon className="w-12 h-12"/>Hello
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
      </header>

      <div className="bg-white w-screen">
        <div className="flex flex-wrap text-center justify-evenly">
          <ImageSearch />
        </div>

        <div className="items-center text-center bg-black m-10 p-10 ">
          <div className="text-3xl capitalize text-wrap">Subscribe to our newsletter</div>
          <p className="p-3">
            Top your email bellow and get the new notifications about Canine Connect
          </p>
          <form className='' action="">
            <div className="join">
              <input className="input input-bordered join-item" type="email" name="email" id="email" placeholder="Add your email here"/>
              <button className="btn join-item rounded-r-full" type="submit">
               <span>
                 {/* Show arrow icon on smaller screens */}
                  <div className="md:hidden">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth="1.5" 
                      stroke="currentColor" 
                      className="w-6 h-6"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" 
                      />
                    </svg>
                  </div>
                  {/* Show "Subscribe" text on larger screens */}
                  <div className="hidden md:block">
                    <span>Subscribe</span>
                  </div>
                </span>
              </button>
            </div>
            
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
