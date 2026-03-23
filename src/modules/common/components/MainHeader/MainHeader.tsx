import { useLocale } from "../../hooks/useLocale";
import YellowSpike from "../../../../assets/icons/spike-yellow.svg";
import GrayGroupOfSpikes from "../../../../assets/icons/gray-group-of-spikes.svg";
import VerticalSpike from "../../../../assets/icons/vertical-spike.svg";
import { SITE_NAME } from "../../../../config/constants";

interface MainHeaderProps {
  image: string;
  title: string;
  subtitle: string;
}

const MainHeader = ({ image, title, subtitle }: MainHeaderProps) => {
  const { lang } = useLocale();
  return (
    <div className="w-full h-screen relative overflow-y-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-10 ">
        <div className="absolute w-full h-full bg-[linear-gradient(to_bottom,#162f29,30%,#162f2900)]"></div>
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div
        className={`absolute bottom-0 flex flex-col-reverse sm:flex-row px-8 sm:px-0 ${lang === "ar" ? "right-0 rounded-tl-2xl" : "left-0 rounded-tr-2xl"} z-20 bg-fm-green/60 flex items-start sm:items-center justify-center gap-8 w-full max-w-200 pt-8`}
      >
        <div className="relative flex items-end w-full sm:w-auto justify-center sm:justify-start">
          <div className="absolute bottom-4 sm:left-4 z-0">
            <img
              src={GrayGroupOfSpikes}
              alt={`Group of Spikes ${SITE_NAME}`}
              className="w-25 h-full translate-y-[76%]"
            />
          </div>
          <div className="translate-x-4">
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
          <div className="-translate-x-4">
            <div className="w-10 h-auto animate-spike-wave animate-delay-5s">
              <img
                src={YellowSpike}
                alt={`Spike ${SITE_NAME}`}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-auto max-w-70 sm:max-w-none">
          <h1 className="text-[38px] font-bold text-white mx-4 sm:mx-0">{title}</h1>
          <div className="max-w-100 my-2">
            <img src={VerticalSpike} className="w-full h-auto object-contain" />
          </div>
          <p className="text-fm-yellow max-w-100">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
