import Banner from "../../components/Banner/Banner";
import DownloadMobile from "../../components/DownloadMobile/DownloadMobile";
import MenPageCategories from "../../components/PageCategories/MenPageCategories/MenPageCategories";
import MenPageNewItems from "../../components/PageNewItems/MenPageNewItems/MenPageNewItems";

const Men = () => {
  return (
    <div>
      <Banner></Banner>
      <MenPageCategories></MenPageCategories>
      <MenPageNewItems></MenPageNewItems>
      <DownloadMobile></DownloadMobile>
    </div>
  );
};

export default Men;
