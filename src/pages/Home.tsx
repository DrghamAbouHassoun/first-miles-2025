import { useEffect } from "react";
import Hero from "../modules/home/components/Hero";
import HomeModalProvider from "../modules/home/contexts/ContactModalProvider";
import { useTabNavigation } from "../modules/common/hooks/useTabNavigation";

const Home = () => {
  const { registerPageTabs } = useTabNavigation();

  useEffect(() => {
    registerPageTabs([], "");
  }, [registerPageTabs]);

  return (
    <HomeModalProvider>
      <Hero />
    </HomeModalProvider>
  );
};

export default Home;
