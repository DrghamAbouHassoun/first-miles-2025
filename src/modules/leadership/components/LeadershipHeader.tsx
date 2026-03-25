import { SITE_NAME } from "../../../config/constants";
import VerticalSpike from "../../../assets/icons/vertical-spike.svg";
import TwoLeavesVector from "../../../assets/vectors/two-leaves.png";
import QuotationIcon from "../../../assets/icons/quotation.svg";

interface LeadershipHeaderProps {
  imageUrl: string;
  imageWidth?: number;
  imageScale?: number;
  imageTranslateX?: number;
  imageTranslateY?: number;
  title: string;
  subtitle?: string;
  quotation?: string;
}

const LeadershipHeader = ({
  imageUrl,
  imageWidth = 250,
  imageScale = 1,
  imageTranslateX = 0,
  imageTranslateY = 0,
  title,
  subtitle,
  quotation,
}: LeadershipHeaderProps) => {
  return (
    <div className="w-full bg-fm-green text-white flex overflow-x-clip relative min-h-70">
      <img
        src={TwoLeavesVector}
        alt={SITE_NAME}
        className="absolute bottom-0 right-0 w-52 h-auto pointer-events-none select-none"
      />
      <div className="flex-1 flex relative w-500 ">
        <img
          src={imageUrl}
          alt={`${title} | ${SITE_NAME}`}
          style={{
            width: imageWidth,
            transform: `scale(${imageScale}) translateX(${imageTranslateX}px) translateY(${imageTranslateY}px)`,
          }}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <h2 className="text-lg font-bold text-fm-yellow">{title}</h2>
        <p>{subtitle}</p>
        <img src={VerticalSpike} alt={SITE_NAME} className="" />
      </div>
      <div className="flex-1 flex justify-center items-center px-4 text-lg">
        <div className="flex items-start gap-2">
          <img
            src={QuotationIcon}
            alt={SITE_NAME}
            className="w-8 h-auto mb-4"
          />
          <p>{quotation}</p>
        </div>
      </div>
    </div>
  );
};

export default LeadershipHeader;
