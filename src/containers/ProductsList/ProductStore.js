import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import Loading from '../../common/Loading/Loading';
import { getProductsBySlug } from '../../redux/action/product.action';
import { productImgWithApi } from '../../urlConfig';

import '../containers.css';

const ProductStore = () => {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector(state => state, shallowEqual);

    useEffect(() => {
        dispatch(getProductsBySlug(slug))
    }, [dispatch, slug])

    return (
        <>
            {
                product?.loading ?
                    <Loading />
                    :
                    <>
                        {
                            Object.keys(product?.productsByPrice)?.map((key, index) => {
                                return (
                                    <div key={index}>
                                        {
                                            product?.productsByPrice[key]?.length > 0 &&
                                            <div className='my-3 container-fluid'>
                                                <div className='product-container'>
                                                    <div className='d-flex justify-content-between align-items-center product-header'>
                                                        <h4 className='prodcut-header-title'>
                                                            {`${slug[0].toUpperCase() + slug.substring(1)} ${key[0].toUpperCase() + key.substring(1)}`}
                                                        </h4>
                                                    </div>
                                                    <div className='row'>
                                                        {
                                                            product?.productsByPrice[key]?.map(pd =>
                                                                <div key={pd?._id} className='col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6'>
                                                                    <NavLink to={`/products/${slug}/${pd?._id}`} style={{ textDecoration: 'none' }}>
                                                                        <div className='py-2 px-1'>
                                                                            <div className='prodcut-image-container'>
                                                                                <img src={productImgWithApi(pd?.productPictures[0]?.img)} className='product-image' alt={pd?.productName} />
                                                                            </div>
                                                                            <div className='text-center mt-2'>
                                                                                <h6>{pd?.productName}</h6>
                                                                                <div>
                                                                                    <span>132</span> &nbsp;
                                                                                    <span>132</span>
                                                                                </div>
                                                                                <div className='prodcut-price'>{pd?.price}</div>
                                                                            </div>
                                                                        </div>
                                                                    </NavLink>
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                )
                            })
                        }
                    </>
            }
        </>
    );
};

export default ProductStore;