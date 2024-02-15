import { SocialType } from "shared/SocialsShare/SocialsShare";
import React, { FC } from "react";
const storagePath = "https://shm-product-images.s3.amazonaws.com";
const facebook = storagePath+"/images/socials/facebook.svg";
const twitter = storagePath+"/images/socials/twitter.svg";
const telegram = storagePath+"/images/socials/telegram.svg";
const youtube = storagePath+"/images/socials/youtube.svg";

export interface SocialsListProps {
  className?: string;
  itemClass?: string;
  socials?: SocialType[];
}

const socialsDemo: SocialType[] = [
  { name: "Facebook", icon: facebook, href: "#" },
  { name: "Twitter", icon: twitter, href: "#" },
  { name: "Youtube", icon: youtube, href: "#" },
  { name: "Telegram", icon: telegram, href: "#" },
];

const SocialsList: FC<SocialsListProps> = ({
  className = "",
  itemClass = "block w-6 h-6",
  socials = socialsDemo,
}) => {
  return (
    <nav
      className={`nc-SocialsList flex space-x-2.5 text-2xl text-neutral-6000 dark:text-neutral-300 ${className}`}
      data-nc-id="SocialsList"
    >
      {socials.map((item, i) => (
        <a
          key={i}
          className={`${itemClass}`}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
        >
          <img src={item.icon} alt="" />
        </a>
      ))}
    </nav>
  );
};

export default SocialsList;
