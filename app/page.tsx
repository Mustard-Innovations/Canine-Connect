import ImageSearch from "./Components/Listings/ImageSearch";
// import Navigation from "./Components/Parts/Navigation";
import Hero from "./Components/Parts/Hero";
import Contact from "./Components/Parts/Contact";
import Footer from "./Components/Parts/Footer";
import Navigation from "./Components/Parts/Navigation";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <div className="bg-white w-screen">
        <div className="flex justify-between text-slate-300 py-6 p-4">
          <div className="m-1 text-xs py-1 px-5">Brand</div>
          <div className="m-1 text-xs py-1 px-5">Brand</div>
          <div className="m-1 text-xs py-1 px-5">Brand</div>
          <div className="m-1 text-xs py-1 px-5">Brand</div>
          <div className="m-1 text-xs py-1 px-5">Brand</div>
        </div>
        <div className="flex flex-wrap text-center justify-evenly">
          <ImageSearch />
        </div>
        <Contact />
      </div>  
      <Footer />
    </main>
  );
}
