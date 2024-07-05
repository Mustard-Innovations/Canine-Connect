import Hero from "./Components/Parts/Hero";
import Footer from "./Components/Parts/Footer";
import Navigation from "./Components/Parts/Navigation";
import BodyItems from "./Components/Parts/BodyItems";

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
