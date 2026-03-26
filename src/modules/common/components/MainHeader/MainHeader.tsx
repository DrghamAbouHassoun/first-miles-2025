import { useLocale } from "../../hooks/useLocale";
import YellowSpike from "../../../../assets/icons/spike-yellow.svg";
import GrayGroupOfSpikes from "../../../../assets/icons/gray-group-of-spikes.svg";
import VerticalSpike from "../../../../assets/icons/vertical-spike.svg";
import { SITE_NAME } from "../../../../config/constants";
import Container from "../Container/Container";

interface MainHeaderProps {
  image: string;
  title: string;
  subtitle: string;
}

const MainHeader = ({ image, title, subtitle }: MainHeaderProps) => {
  const { lang } = useLocale();
  return (
    <div className="w-full h-screen relative overflow-y-hidden z-10">
      <div className="absolute top-0 left-0 w-full h-full z-10 ">
        <div className="absolute w-full h-full"></div>
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div
        className={`absolute h-full bottom-0 flex items-center  ${lang === "ar" ? "bg-linear-270 right-0 rounded-tl-2xl" : "bg-linear-90 left-0 rounded-tr-2xl"} z-20  from-fm-green/60 to-fm-green/0 gap-8 w-full max-w-200 pt-8`}
      >
        <div className="w-full sm:w-full sm:max-w-140 lg:mt-[35%] h-fit ">
          <Container>
            <h1 className="text-[38px] font-bold text-white lg:px-6">{title}</h1>
          </Container>
          <div className="max-w-130 my-2 ">
            <img
              src={VerticalSpike}
              className={`w-full h-auto object-contain ${lang === "ar" ? "rotate-y-180" : ""}`}
            />
          </div>
          <Container>
            <p className="text-fm-yellow max-w-100 min-h-12.5 lg:px-6">
              {subtitle}
            </p>
          </Container>
        </div>
      </div>
      <div
        className={`absolute bottom-0 ${lang === "ar" ? "left-5" : "right-5"} flex items-end sm:w-auto justify-center sm:justify-center z-20 `}
      >
        <div className="absolute">
          <img
            src={GrayGroupOfSpikes}
            alt={`Group of Spikes ${SITE_NAME}`}
            className="w-25 h-full translate-y-[76%]"
          />
        </div>
        <div
          className={`${lang === "ar" ? "-translate-x-4" : "translate-x-4"} w-10 h-auto animate-spike-wave animate-delay-5s`}
        >
          <div className="w-10 h-auto animate-spike-wave animate-delay-5s">
            <img
              src={YellowSpike}
              alt={`Spike ${SITE_NAME}`}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="">
          <div className="w-20 h-auto animate-spike-wave animate-delay-5s">
            <img
              src={YellowSpike}
              alt={`Spike ${SITE_NAME}`}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div
          className={`${lang === "ar" ? "translate-x-4" : "-translate-x-4"}`}
        >
          <div className="w-10 h-auto animate-spike-wave animate-delay-5s">
            <img
              src={YellowSpike}
              alt={`Spike ${SITE_NAME}`}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
