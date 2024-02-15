import React from "react";
export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}
const storagePath = "https://shm-product-images.s3.amazonaws.com";
const logoImg = storagePath+"/images/logo.svg";
const logoLightImg = storagePath+"/images/logo-light.svg";

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "flex-shrink-0",
}) => {
  return (
    <a
      href="/"
      className={`ttnc-logo inline-block text-slate-600 ${className}`}
    >
      {img ? (
        <img
          className={`block max-h-8 sm:max-h-10 ${
            imgLight ? "dark:hidden" : ""
          }`}
          src={img}
          alt="Logo"
        />
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <img
          className="hidden max-h-8 sm:max-h-10 dark:block"
          src={imgLight}
          alt="Logo-Light"
        />
      )}
    </a>
  );
};

export default Logo;
