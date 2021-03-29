import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getProductByPage, getProductsBySlug } from '../../redux/action/product.action';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../containers.css';
import { productImgWithApi } from '../../urlConfig';
import { useParams } from 'react-router';
import Loading from '../../common/Loading/Loading';

const ProductPage = (props) => {
    const { slug } = useParams()
    const dispatch = useDispatch();
    const { product } = useSelector((state) => state, shallowEqual);
    const { page, products } = product;
    const params = props;

    useEffect(() => {
        dispatch(getProductByPage(params))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        dispatch(getProductsBySlug(slug))
    }, [dispatch, slug])

    return (
        <div className='container-fluid'>
            {
                product?.loading ?
                    <Loading />
                    :
                    <>
                        <div className='row'>
                            <h3>{page?.title}</h3>
                            <Carousel
                                renderThumbs={() => { }}
                            >
                                {
                                    page?.banners?.map((banner) =>
                                        <div
                                            key={banner?._id}
                                            style={{ display: "block" }}
                                        >
                                            <img style={{ height: "400px" }} src={productImgWithApi(banner?.img)} alt={page?.title} />
                                        </div>
                                    )
                                }
                            </Carousel>
                        </div>
                        <div className='row my-5'>
                            {
                                products?.length > 0 &&
                                products?.map((pd) =>
                                    <div key={product?._id} className='col-12 col-sm-6 col-md-3'>
                                        <a href={`/products/${pd?.category?.name}/${pd?._id}`} style={{ textDecoration: 'none' }}>
                                            <div className='product-card mb-3'>
                                                <div className='product-img-container'>
                                                    <img className='brand-image' src={productImgWithApi(pd?.productPictures[0]?.img)} alt={pd?.productName} />
                                                </div>
                                                <div className='mt-2 text-center'>
                                                    <p style={{ marginBottom: '5px' }}>{pd?.productName}</p>
                                                    <div className='mb-2'>
                                                        <span className='review-star'>
                                                            4.3
                                                            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==' alt='' />
                                                        </span> &nbsp;
                                                        <span>(132)</span>
                                                    </div>
                                                    <small className='text-muted'>Tk. {pd?.price}</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                )
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default ProductPage;