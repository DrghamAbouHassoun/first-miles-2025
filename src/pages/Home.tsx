import Hero from "../modules/home/components/Hero";
import HomeModalProvider from "../modules/home/contexts/ContactModalProvider";


const Home = () => {
  return (
    <HomeModalProvider>
      <Hero />
    </HomeModalProvider>
  );
};

export default Home;
