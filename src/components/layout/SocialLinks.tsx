import CommunityIcon from "../../assets/icons/social/community.svg?react";
import PlanetIcon from "../../assets/icons/social/planet.svg?react";
import FacebookIcon from "../../assets/icons/social/facebook.svg?react";
import InstagramIcon from "../../assets/icons/social/instagram.svg?react";
import TwitterIcon from "../../assets/icons/social/twitter.svg?react";
import LinkedInIcon from "../../assets/icons/social/linkedin.svg?react";
import YoutubeIcon from "../../assets/icons/social/youtube.svg?react";

const socialLinksData = [
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
  }
];

const SocialLinks = () => {
  return (
    <div className="flex flex-col fixed z-10 left-2 top-1/2 -translate-y-1/2 bg-fm-yellow rounded-md py-2">
      {socialLinksData.map((link) => (
        <a href={link.href} target="_blank" key={link.name} className="flex items-center p-2 w-8.5 h-8.5">
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
