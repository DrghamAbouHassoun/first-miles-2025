import CommunityIcon from "../../../../assets/icons/social/community.svg?react";
import PlanetIcon from "../../../../assets/icons/social/planet.svg?react";
import FacebookIcon from "../../../../assets/icons/social/facebook.svg?react";
import InstagramIcon from "../../../../assets/icons/social/instagram.svg?react";
import TwitterIcon from "../../../../assets/icons/social/twitter.svg?react";
import LinkedInIcon from "../../../../assets/icons/social/linkedin.svg?react";
import YoutubeIcon from "../../../../assets/icons/social/youtube.svg?react";
import { useContext } from "react";
import { RouterContext } from "../../contexts/RouterProvider";
import { useLocale } from "../../hooks/useLocale";

export const socialLinksData = [
  {
    name: "Global Community",
    icon: <CommunityIcon />,
    href: "",
  },
  {
    name: "Planet",
    icon: <PlanetIcon />,
    href: "",
  },
  {
    name: "Facebook",
    icon: <FacebookIcon />,
    href: "",
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    href: "",
  },
  {
    name: "Twitter",
    icon: <TwitterIcon />,
    href: "",
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    href: "",
  },
  {
    name: "YouTube",
    icon: <YoutubeIcon />,
    href: "",
  },
];

const SocialLinks = () => {
  const { currentRoute } = useContext(RouterContext);
  const { lang } = useLocale();
  return (
    <div className={`fixed z-30 top-1/2 ${lang === "ar" ? "left-4" : "right-4"} -translate-y-1/2`}>
      <div className={`hidden lg:flex flex-col bg-fm-yellow rounded-md py-2 animate-fade-right ${(currentRoute === "Home" || currentRoute === "") ? "animate-delay-6s" : ""}`}>
        {socialLinksData.map((link) => (
          <a
            href={link.href}
            target="_blank"
            key={link.name}
            className="flex items-center p-2 w-8.5 h-8.5"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
