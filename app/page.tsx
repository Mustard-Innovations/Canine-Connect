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
import Navigation from "./Components/Parts/Navigation";
import Hero from "./Components/Parts/Hero";
import Contact from "./Components/Parts/Contact";
import Footer from "./Components/Parts/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />

      <div className="bg-white w-screen">
        <div className="flex flex-wrap text-center justify-evenly">
          <ImageSearch />
        </div>
        <Contact />
      </div>  
      <Footer />
    </main>
  );
}
