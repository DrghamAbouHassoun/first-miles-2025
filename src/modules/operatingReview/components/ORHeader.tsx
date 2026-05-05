import { SITE_NAME } from "../../../config/constants";
import PopupAnimation from "../../common/components/animations/PopupAnimation";
import SlideAsideAnimation from "../../common/components/animations/SlideAsideAnimation";
import Container from "../../common/components/Container/Container";
import { useLocale } from "../../common/hooks/useLocale";

interface ORHeaderProps {
  pageTitle: string;
  title: string;
  subtitle: string;
  desc: string;
  bgImage: string;
  brandImage: string;
  brandLogo?: string;
}

const ORHeader = ({
  pageTitle,
  title,
  subtitle,
  desc,
  bgImage,
  brandImage,
  brandLogo,
}: ORHeaderProps) => {
  const { lang } = useLocale();
  return (
    <div className="w-full relative">
      <div className="absolute inset-0 -z-10 w-full h-full top-0 left-0">
        <img
          src={bgImage}
          alt="Operating Review Header"
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      <div className="w-full h-full bg-fm-green/70 py-32">
        <Container>
          <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-4 text-white">
            <div className="flex-1">
              <SlideAsideAnimation
                level="20"
                side={lang === "ar" ? "left" : "right"}
              >
                <h1
                  className="text-4xl text-fm-white font-bold mb-4"
                  dangerouslySetInnerHTML={{ __html: pageTitle }}
                ></h1>
              </SlideAsideAnimation>
              {brandLogo && (
                <PopupAnimation>
                  <div className="w-32 h-auto mb-4">
                    <img
                      src={brandLogo}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                </PopupAnimation>
              )}
              <SlideAsideAnimation
                level="20"
                side={lang === "ar" ? "left" : "right"}
              >
                <h2
                  className="text-3xl text-fm-yellow font-bold mb-4"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></h2>
              </SlideAsideAnimation>
              <SlideAsideAnimation
                level="20"
                side={lang === "ar" ? "left" : "right"}
              >
                <h3 className="text-base font-bold">{subtitle}</h3>
              </SlideAsideAnimation>
              <SlideAsideAnimation
                level="20"
                side={lang === "ar" ? "left" : "right"}
              >
                <p
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: desc }}
                ></p>
              </SlideAsideAnimation>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <PopupAnimation>
                <img
                  src={brandImage}
                  alt={`${title} | ${SITE_NAME}`}
                  className="w-full h-auto object-contain max-w-120 animate-bounce"
                />
              </PopupAnimation>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ORHeader;
