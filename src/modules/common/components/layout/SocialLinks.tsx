import CommunityIcon from "../../../../assets/icons/social/community.svg?react";
import PlanetIcon from "../../../../assets/icons/social/planet.svg?react";
import InstagramIcon from "../../../../assets/icons/social/instagram.svg?react";
import TwitterIcon from "../../../../assets/icons/social/twitter.svg?react";
import LinkedInIcon from "../../../../assets/icons/social/linkedin.svg?react";
import { useContext } from "react";
import { RouterContext } from "../../contexts/RouterProvider";
import { useLocale } from "../../hooks/useLocale";
import { INSTAGRAM_LINK, LINKEDIN_LINK, MAIN_WEBSITE, TWITTER_LINK } from "../../../../config/constants";
import { ContactModalContext } from "../../../home/contexts/ContactModalProvider";

export const socialLinksData = [
  {
    name: "Global Community",
    icon: <CommunityIcon />,
    type: "button",
    href: "",
    action: "OPEN_MODAL",
  },
  {
    name: "Planet",
    icon: <PlanetIcon />,
    type: "link",
    href: MAIN_WEBSITE,
    target: "_blank",
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    type: "link",
    href: INSTAGRAM_LINK,
    target: "_blank",
  },
  {
    name: "Twitter",
    icon: <TwitterIcon />,
    type: "link",
    href: TWITTER_LINK,
    target: "_blank",
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    type: "link",
    href: LINKEDIN_LINK,
    target: "_blank",
  },
];

const SocialLinks = () => {
  const { currentRoute, homeKey } = useContext(RouterContext);
  const { toggleModel } = useContext(ContactModalContext);
  const isHome = currentRoute === "Home" || currentRoute === "";
  const { lang } = useLocale();
  return (
    <div className={`hidden lg:block fixed z-30 top-1/2 ${lang === "ar" ? "left-4" : "right-4"} -translate-y-1/2`}>
      <div key={isHome ? homeKey : currentRoute} className={`hidden lg:flex flex-col bg-fm-yellow rounded-md py-2 ${lang === "ar" ? "animate-fade-right" : "animate-fade-left"} ${isHome ? "animate-delay-6s" : ""}`}>
        {socialLinksData.map((link) => link.type === "link" ? (
          <a
            href={link.href}
            target={link.target}
            key={link.name}
            className="flex items-center p-2 w-8.5 h-8.5"
          >
            {link.icon}
          </a>
        ) : (
          <button 
            key={link.name}
            type="button"
            className="flex items-center p-2 w-8.5 h-8.5"
            onClick={() => toggleModel(true)}
          >
            {link.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
