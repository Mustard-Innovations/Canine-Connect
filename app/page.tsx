import ImageSearch from "./Components/Listings/ImageSearch";
import Hero from "./Components/Parts/Hero";
import Contact from "./Components/Parts/Contact";
import Footer from "./Components/Parts/Footer";
import Navigation from "./Components/Parts/Navigation";
import BodyItems from "./Components/Parts/BodyItems";
import Brand from "./Components/Parts/Brand";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <BodyItems />
      <Footer />
    </main>
  );
}
