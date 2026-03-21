import Hero from "../modules/home/components/Hero";
import HomeModal from "../modules/home/components/HomeModal";
import HomeModalProvider from "../modules/home/contexts/HomeModalProvider";


const Home = () => {
  return (
    <HomeModalProvider>
      <HomeModal />
      <Hero />
    </HomeModalProvider>
  );
};

export default Home;
