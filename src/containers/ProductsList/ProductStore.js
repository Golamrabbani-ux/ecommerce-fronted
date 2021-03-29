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
                                                    <div className='row'>
                                                        {
                                                            product?.productsByPrice[key]?.map(pd =>
                                                                <div key={pd?._id} className='col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6'>
                                                                    <NavLink to={`/products/${slug}/${pd?._id}`} style={{ textDecoration: 'none' }}>
                                                                        <div className='product-store-card mb-3'>
                                                                            <div className='prodcut-image-container'>
                                                                                <img src={productImgWithApi(pd?.productPictures[0]?.img)} className='product-image' alt={pd?.productName} />
                                                                            </div>
                                                                            <div className='my-2 mr-2'>
                                                                                <h6>{pd?.productName}</h6>
                                                                                <div className='mb-2'>
                                                                                    <span className='review-star'>
                                                                                        4.3
                                                                                        <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==' alt=''/>
                                                                                    </span> &nbsp;
                                                                                    <span>(132)</span>
                                                                                </div>
                                                                                <div className='prodcut-price'>Tk. {pd?.price}</div>
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