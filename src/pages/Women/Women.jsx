import React from "react";
import Banner from "../../components/Banner/Banner";
import DownloadMobile from "../../components/DownloadMobile/DownloadMobile";
import WomenPageCategories from "../../components/PageCategories/WomenPageCategories/WomenPageCategories";
import WomenPageNewItems from "../../components/PageNewItems/WomenPageNewItems/WomenPageNewItems";

const Women = () => {
  return (
    <div>
      <Banner></Banner>
      <WomenPageCategories></WomenPageCategories>
      <WomenPageNewItems></WomenPageNewItems>
      <DownloadMobile></DownloadMobile>
    </div>
  );
};

export default Women;
