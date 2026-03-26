import { SITE_NAME } from "../../../config/constants";
import VerticalSpike from "../../../assets/icons/vertical-spike.svg";
import TwoLeavesVector from "../../../assets/vectors/two-leaves.png";
import QuotationIcon from "../../../assets/icons/quotation.svg";
import useWindowDimensions from "../../common/hooks/useWindowDimensions";

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
  const { width: screenWidth } = useWindowDimensions();
  return (
    <div className="w-full bg-fm-green text-white flex flex-col lg:items-center lg:flex-row overflow-x-clip relative min-h-100 pb-4 lg:pb-0">
      <img
        src={TwoLeavesVector}
        alt={SITE_NAME}
        className="absolute bottom-0 right-0 w-52 h-auto pointer-events-none select-none"
      />
      <div className=" flex relative max-w-100 lg:max-w-none justify-center lg:justify-start lg:w-110">
        <img
          src={imageUrl}
          alt={`${title} | ${SITE_NAME}`}
          style={{
            width: screenWidth > 1024 ? imageWidth : "100%",
            transform: screenWidth > 1024 ? `scale(${imageScale}) translateX(${imageTranslateX}px) translateY(${imageTranslateY}px)` : "translateX(-16px)",
          }}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="flex-1 flex w-full flex-col lg:items-center gap-4 xl:gap-0 xl:flex-row lg:px-16 pt-16 xl:pt-0 px-4 ">
        <div className="xl:flex-1 flex flex-col justify-center lg:items-center lg:text-center max-w-150">
          <h2 className="text-lg font-bold text-fm-yellow">{title}</h2>
          <p>{subtitle}</p>
          <img src={VerticalSpike} alt={SITE_NAME} className="" />
        </div>
        <div className="flex-1 flex lg:justify-center items-center pr-4 text-lg">
          <div className="flex items-start gap-2 max-w-150">
            <img
              src={QuotationIcon}
              alt={SITE_NAME}
              className="w-8 h-auto xl:mb-4"
            />
            <p className="font-bold">{quotation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipHeader;
