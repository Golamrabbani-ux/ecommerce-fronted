import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../common/Loading/Loading';
import { getProductsBySlug } from '../../redux/action/product.action'
import { productImgWithApi } from '../../urlConfig'

import '../containers.css';

const ProductsByProducts = (props) => {
    const dispatch = useDispatch();
    const { slug } = useParams()
    const { products, loading } = useSelector(state => state?.product)

    useEffect(() => {
        if (props?.type === "product") {
            dispatch(getProductsBySlug(slug))
        }
    }, [dispatch, props?.type, slug]);
    return (
        <div className='container-fluid' style={{ padding: '30px 90px' }}>
            {
                loading ?
                    <Loading />
                    :
                    <>
                        <div className='row'>
                            <div className='col-md-9'>
                                {
                                    products?.map(product =>
                                        <div key={product?._id} className='product-card'>
                                            <Link to={`/products/${slug}/${product?._id}`} style={{ textDecoration: 'none' }}>
                                                <div className='row text-muted'>
                                                    <div className='col-sm-12 col-md-2'>
                                                        <div className='text-center'>
                                                            <img height='160px' src={productImgWithApi(product?.productPictures[0].img)} alt={product?.productName} />
                                                        </div>
                                                    </div>
                                                    <div className='col-sm-12 col-md-8 pl-5 mt-1'>
                                                        <div className='product-details text-muted'>
                                                            <h6 className='product-title'>{product?.productName}</h6>
                                                            <ul>
                                                                <li>{product?.ram} {product?.ram} {product?.ram}</li>
                                                                <li>{product?.display}</li>
                                                                <li>{product?.camera}</li>
                                                                <li>{product?.battery}</li>
                                                                <li>{product?.processor}</li>
                                                                <li>{product?.warranty}</li>
                                                                <li>{product?.seller}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className='col-sm-12 col-md-2 pl-5 mt-1'>
                                                        <h6 className='product-title'>TK. {product?.price}</h6>
                                                        <small>No Cost EMI</small>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                            <div className='col-md-3'>
                                <div className='d-flex'>
                                    <img width='40' src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/shield_5f9216.png' alt='' />
                                    <div className='text-muted mt-1 pl-2'>
                                        <p style={{ fontSize: '14px', fontWeight: '500', color: '#878787' }}>Safe and secure. Easy returns. 100% Authentic products</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default ProductsByProducts;