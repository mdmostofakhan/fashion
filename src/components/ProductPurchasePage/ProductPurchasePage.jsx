
import { Helmet } from 'react-helmet';
import ProductPurchaseSection from './ProductPurchaseSection';
import WomenPageNewItems from '../PageNewItems/WomenPageNewItems/WomenPageNewItems';
import DownloadMobile from '../DownloadMobile/DownloadMobile';

const ProductPurchasePage = () => {

   

    return (
        // not mobile responsive
        <div>
            <Helmet><title>UrbanUtopia | Product Purchase</title></Helmet>
            <ProductPurchaseSection></ProductPurchaseSection>
            <WomenPageNewItems></WomenPageNewItems>
            <DownloadMobile></DownloadMobile>
        </div>
    );
};

export default ProductPurchasePage;