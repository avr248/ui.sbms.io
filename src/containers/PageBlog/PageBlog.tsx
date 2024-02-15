import React from "react";
import { Helmet } from "react-helmet-async";
import SectionAds from "./SectionAds";
import SectionMagazine5 from "./SectionMagazine5";
import SectionLatestPosts from "./SectionLatestPosts";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionPromo3 from "components/SectionPromo3";

const PageBlog: React.FC = () => {
  return (
    <div className="nc-BlogPage overflow-hidden relative">
      <Helmet>
        <title>Blog || Ciseco React Template</title>
      </Helmet>
      <BgGlassmorphism />
      <div className="container relative">
        <div className="pt-12 pb-16 lg:pb-28">
          <SectionMagazine5 />
        </div>
        <SectionAds />
        <SectionLatestPosts className="py-16 lg:py-28" />
        <SectionPromo3 className="pb-16 lg:pb-28" />
      </div>
    </div>
  );
};

export default PageBlog;
