import React from "react";
import Banner from "../../components/Banner/Banner";
import DownloadMobile from "../../components/DownloadMobile/DownloadMobile";
import KidsPageCategories from "../../components/PageCategories/KidsPageCategories/KidsPageCategories";
import KidsPageNewItems from "../../components/PageNewItems/KidsPageNewItems/KidsPageNewItems";

const Kids = () => {
  return (
    <div>
      <Banner></Banner>
      <KidsPageCategories></KidsPageCategories>
      <KidsPageNewItems></KidsPageNewItems>
      <DownloadMobile></DownloadMobile>
    </div>
  );
};

export default Kids;
