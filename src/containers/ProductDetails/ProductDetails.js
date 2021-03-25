import React, { useEffect, useState } from 'react';
import { IoAnalytics, IoCartSharp, IoChevronForwardOutline, IoShareSocialOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import LayoutPage from '../../components/LayoutPage/LayoutPage';
import { addToCart } from '../../redux/action/cart.action';
import { getProductDetailsBYId } from '../../redux/action/product.action';
import { productImgWithApi } from '../../urlConfig';
import Loading from '../../common/Loading/Loading'
import '../containers.css';

const ProductDetails = () => {
    const params = useParams();
    const histroy = useHistory();
    const dispatch = useDispatch();
    const { productDetails, loading } = useSelector(state => state?.product);
    const [bigImageShow, setBigImageShow] = useState(null);

    // Default Image Active
    const singleImage = productDetails?.productPictures?.[0];
    useEffect(() => {
        if (singleImage) {
            setBigImageShow(singleImage);
        }
    }, [singleImage])

    useEffect(() => {
        dispatch(getProductDetailsBYId(params?.productId))
    }, [dispatch, params?.productId]);

    const handleAddToCart = () => {
        const img = singleImage?.img;
        const { _id, productName, price, category } = productDetails;
        const payload = {
            _id,
            productName,
            price,
            img,
            slug: category?.slug,
            category: category?.name,
        }
        dispatch(addToCart(payload))
        histroy.push('/cart')
    }

    return (
        <LayoutPage>
            {
                loading ?
                    <Loading />
                    :
                    <div style={{ backgroundColor: 'white', paddingBottom: '30px' }}>
                        <div className='container-fluid px-4 pt-5'>
                            <div className='row'>
                                <div className='col-md-5'>
                                    <div className='image-conatiner mt-3'>
                                        <img src={productImgWithApi(bigImageShow?.img)} alt='' />
                                        {/* <InnerImageZoom 
                                zoomScale={3} 
                                src={productImgWithApi(bigImageShow?.img)}
                                zoomType="hover"
                                style={{width: '100%', height: '100%'}}
                            /> */}
                                    </div>
                                    <div className='small-img-container'>
                                        {
                                            productDetails.productPictures?.map((thum, index) =>
                                                <div
                                                    key={thum._id}
                                                    className={productDetails.productPictures[index] === bigImageShow ? 'mx-2 p-2 border' : 'mx-2 p-2'}
                                                    onMouseOver={() => setBigImageShow(productDetails.productPictures[index])}
                                                >
                                                    <img
                                                        src={productImgWithApi(thum?.img)}
                                                        alt={productDetails?.productName}
                                                        style={{ width: '50px', height: '85px' }}
                                                    />
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className='col-md-7'>
                                    <div className='row'>
                                        <div className='d-flex justify-content-between text-muted'>
                                            <div className='d-flex grade'>
                                                <small>Home <IoChevronForwardOutline /> prodcts <IoChevronForwardOutline /> {params?.slug} <IoChevronForwardOutline /> {productDetails?.productName}</small>
                                            </div>
                                            <div style={{ cursor: 'pointer' }}>
                                                <IoShareSocialOutline /> Share
                                </div>
                                        </div>
                                    </div>
                                    <div className='row my-2'>
                                        <h4 className='product-name'>{productDetails?.productName}</h4>
                                        <h2>Price: ₹ {productDetails?.price}</h2>
                                        <p className='ava-offers'>Available Offers</p>
                                        <div className='desc text-muted'>
                                            <div>Description</div>
                                            <div>
                                                <span>{productDetails?.description}</span>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-6 col-md-6'>
                                                <button
                                                    className='pd-details-btn add-to-cart'
                                                    onClick={handleAddToCart}
                                                >
                                                    <IoCartSharp size={25} color='white' /> Add to cart
                                    </button>
                                            </div>
                                            <div className='col-sm-6 col-md-6'>
                                                <button className='pd-details-btn buy-now'>
                                                    <IoAnalytics size={25} color='white' /> Buy now
                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </LayoutPage >
    );
};

export default ProductDetails;