import React, { useEffect, useState } from 'react';
import { IoChevronForwardOutline, IoShareSocialOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LayoutPage from '../../components/LayoutPage/LayoutPage';
import { getProductDetailsBYId } from '../../redux/action/product.action';

const ProductDetails = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { productDetails } = useSelector(state => state?.product);

    useEffect(() => {
        dispatch(getProductDetailsBYId(params?.productId))
    }, [dispatch, params?.productId])
    console.log(productDetails);

    return (
        <LayoutPage>
            <div className='container-fluid my-3' style={{ padding: '0px 40px' }}>
                <div className='row'>
                    <div className='col-md-5'>
                        This is image site
                    </div>
                    <div className='col-md-7'>
                        <div className='row'>
                            <div className='d-flex justify-content-between text-muted'>
                                <div className='d-flex grade'>
                                    <small>Home <IoChevronForwardOutline /> prodcts <IoChevronForwardOutline /> {params?.slug} <IoChevronForwardOutline /> {productDetails?.productName}</small>
                                </div>
                                <div style={{cursor: 'pointer'}}>
                                    <IoShareSocialOutline /> Share
                                </div>
                            </div>
                        </div>
                        <div className='row my-2'>
                            <h4>{productDetails?.productName}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutPage>
    );
};

export default ProductDetails;