import { SITE_NAME } from "../config/constants";
import { useTranslation } from "../hooks/useTranslation";
import HomeHero from "../assets/images/home-hero.jpg";
import YellowSpike from "../assets/icons/spike-yellow.svg";

const Home = () => {
  const { t } = useTranslation("home");
  return (
    <div className="bg-fm-green w-full h-screen overflow-y-hidden flex justify-center items-center relative">
      <div className=" w-full mx-auto max-w-337.5 min-h-screen flex justify-center items-center">
        <div className="text-white flex-1 flex flex-col">
          <h1 className="text-2xl font-thin">{t("hero.title")}</h1>
          <p
            className="text-5xl font-bold mb-8"
            dangerouslySetInnerHTML={{ __html: t("hero.subtitle") }}
          />
          <button className="bg-linear-to-r from-fm-yellow to-fm-green text-white w-fit px-4 py-1 text-lg rounded-tl-md">
            {t("hero.modalButton")}
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="rounded-3xl overflow-hidden w-87.5 h-auto">
            <img src={HomeHero} alt={SITE_NAME} className="w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end">
        <div className="w-[45px] h-auto animate-spike-wave">
          <img src={YellowSpike} alt={`Spike ${SITE_NAME}`} className="w-full h-auto" />
        </div>
        <div className="w-[85px] h-auto animate-spike-wave">
          <img src={YellowSpike} alt={`Spike ${SITE_NAME}`} className="w-full h-auto" />
        </div>
        <div className="w-[45px] h-auto animate-spike-wave">
          <img src={YellowSpike} alt={`Spike ${SITE_NAME}`} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Home;
