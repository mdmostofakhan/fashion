import React from 'react';
import Banner from '../../components/Banner/Banner';
import WomenPageNewItems from '../../components/PageNewItems/WomenPageNewItems/WomenPageNewItems';
import DownloadMobile from '../../components/DownloadMobile/DownloadMobile';
import CartPageSection from '../../components/CartPageSection/CartPageSection';
import { Helmet } from 'react-helmet';

const Cart = () => {
    return (
        <div>
            <Helmet><title>UrbanUtopia | Cart</title></Helmet>
            <CartPageSection></CartPageSection>
            <WomenPageNewItems></WomenPageNewItems>
            <DownloadMobile></DownloadMobile>
        </div>
    );
};

export default Cart;