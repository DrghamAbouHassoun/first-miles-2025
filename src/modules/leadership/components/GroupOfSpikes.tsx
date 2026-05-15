import YellowSpike from "../../../assets/icons/spike-yellow-2.svg";
import GreySpike from "../../../assets/icons/spike-gray.svg";
import { useLocale } from "../../common/hooks/useLocale";

interface GropOfSpikesProps {
  isTransparentOnMobile?: boolean;
}

const GroupOfSpikes = ({ isTransparentOnMobile = true }: GropOfSpikesProps) => {
  const { lang } = useLocale();
  return (
    <div className="flex items-end">
      <div className={`w-10 h-auto ${lang === "ar" ? "-translate-x-2" : "translate-x-10"}`}>
        <div className="w-full h-auto">
          <img
            src={YellowSpike}
            alt="Yellow Spike"
            className={`w-full h-auto animate-spike-wave ${isTransparentOnMobile ? "opacity-30" : ""} xl:opacity-100`}
          />
        </div>
      </div>
      <div className="w-25 h-auto">
        <div className="w-full h-auto">
          <img
            src={YellowSpike}
            alt="Yellow Spike"
            className={`w-full h-auto animate-spike-wave ${isTransparentOnMobile ? "opacity-30" : ""} xl:opacity-100`}
          />
        </div>
      </div>
      <div className={`w-13 h-auto ${lang === "ar" ? "translate-x-8" : "-translate-x-8"}`}>
        <div className="w-full h-auto">
          <img
            src={YellowSpike}
            alt="Yellow Spike"
            className={`w-full h-auto animate-spike-wave ${isTransparentOnMobile ? "opacity-30" : ""} xl:opacity-100`}
          />
        </div>
      </div>

      {/* Grey Spikes */}
      <div className={`absolute w-10 h-auto ${lang === "ar" ? "-translate-x-2 left-44" : "translate-x-10 right-44"}`}>
        <div className="w-full h-auto">
          <img
            src={GreySpike}
            alt="Yellow Spike"
            className={`w-full h-auto animate-spike-wave ${isTransparentOnMobile ? "opacity-30" : ""} xl:opacity-100`}
          />
        </div>
      </div>
      <div className={`absolute w-25 h-auto ${lang === 'ar' ? "left-16" : "right-16"}`}>
        <div className="w-full h-auto">
          <img
            src={GreySpike}
            alt="Yellow Spike"
            className={`w-full h-auto animate-spike-wave ${isTransparentOnMobile ? "opacity-30" : ""} xl:opacity-100`}
          />
        </div>
      </div>
      <div className={`absolute w-13 h-auto ${lang === "ar" ? "translate-x-8 left-4" : "-translate-x-8 right-4"}`}>
        <div className="w-full h-auto overflow-hidden">
          <img
            src={GreySpike}
            alt="Yellow Spike"
            className={`w-full h-auto animate-spike-wave ${isTransparentOnMobile ? "opacity-30" : ""} xl:opacity-100`}
          />
        </div>
      </div>
    </div>
  );
};

export default GroupOfSpikes;
