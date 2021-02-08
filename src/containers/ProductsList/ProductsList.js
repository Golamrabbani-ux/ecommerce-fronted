import React from 'react';
import { useLocation } from 'react-router-dom';
import LayoutPage from '../../components/LayoutPage/LayoutPage';
import searchParams from '../../utils/searchParams';
import ProductPage from './ProductPage';
import ProductStore from './ProductStore';



const ProductsList = (props) => {
    const location = useLocation();

    const renderProductList = (props) =>{
        let content = null;
        const params = searchParams(location.search);
        switch (params.type) {
            case "store":
                content = <ProductStore {...params} />
                break;
            case "page": 
                content = <ProductPage {...params} />
                break
            default:
                content = null;
                break;
        }
        return content;
    }

    return (
        <LayoutPage>
            {renderProductList()}
        </LayoutPage>
    );
};

export default ProductsList;