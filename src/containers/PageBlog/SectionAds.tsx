import React, { FC } from "react";
import NcImage from "shared/NcImage/NcImage";
export interface SectionAdsProps {
  className?: string;
}
const imgAds = "images/ads.png";

const SectionAds: FC<SectionAdsProps> = ({ className = "" }) => {
  return (
    <a href="/#" className={`nc-SectionAds block w-full ${className}`}>
      <NcImage className="w-full" src={imgAds} />
    </a>
  );
};

export default SectionAds;
