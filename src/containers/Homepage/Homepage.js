/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LayoutPage from '../../components/LayoutPage/LayoutPage';
import { getBrand, getHomePageBanner } from '../../redux/action/homePage.action';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './HomePage.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productImgWithApi } from '../../urlConfig';
import supportImg from '../../others/home/support.png';
import moneyImg from '../../others/home/money.png';
import discountImg from '../../others/home/discount.png';
import SpaceBetween from '../../common/SpaceBetween';
import { productWithSlug } from '../Api';
import { Link } from 'react-router-dom';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                infinite: true,
                dots: false
            }
        }
    ]
};
const supportWrap = [
    { title: "Suport 24/7", shortDetails: "Free shipping on all order", img: supportImg },
    { title: "Money Return", shortDetails: "Free shipping on all order", img: moneyImg },
    { title: "Order Discount", shortDetails: "Free shipping on all order", img: discountImg },
]

const homePageProducts = {
    sumsung: { title: "Sumsung Mobile", href: '/products/Sumsung?cid=603df15e4066620804d24d87&type=store' },
    xiaomi: { title: "Xiaomi Mobile", href: '/products/Xiaomi?cid=603df3624066620804d24d8c&type=product' },
}



const Homepage = () => {
    const dispatch = useDispatch();
    const { banner } = useSelector(state => state);
    const [sumsungProduct, setSumsung] = useState([]);
    const [xiaomiMobile, setXiaomiMobile] = useState([]);

    useEffect(() => {
        dispatch(getHomePageBanner());
        dispatch(getBrand());
        productWithSlug("Sumsung", setSumsung);
        productWithSlug("Xiaomi", setXiaomiMobile);
        productWithSlug("Xiaomi", setXiaomiMobile);
    }, [dispatch]);

    const productWithPage = (products) => {
        return (
            products?.slice(0, 3)?.map(pd =>
                <div key={pd?._id} className='col-sm-6 col-md-4 col-lg-3 mb-2'>
                    <Link to={`/products/${pd?.category?.name}/${pd?._id}`} style={{ textDecoration: 'none' }}>
                        <div className='product-card'>
                            <div className='product-img-container'>
                                <img className='brand-image' src={productImgWithApi(pd?.productPictures[0]?.img)} alt={pd?.productName} />
                            </div>
                            <div className='mt-2'>
                                <p style={{ marginBottom: '5px' }}>{pd?.productName}</p>
                                <small className='text-muted'>Tk. {pd?.price}</small>
                            </div>
                        </div>
                    </Link>
                </div>

            )
        )
    }

    return (
        <LayoutPage>
            <div className='container-fluid mt-5'>
                <div className='row  ml-3 mr-3'>
                    <Slider {...settings}>
                        {
                            banner?.banner?.map((ban) =>
                                <a key={ban?._id} href={`/products/${ban?.categoryName}/?cid=${ban?._id}&type=${ban?.type?.toLowerCase()}`} >
                                    <img src={productImgWithApi(ban?.bannerPics?.[0]?.img)} alt={ban?.categoryName} />
                                </a>
                            )
                        }
                    </Slider>
                </div>
                <div className='row ml-5 mr-5 mt-5'>
                    {
                        supportWrap?.map(item =>
                            <div key={item?.title} className='col-md-4 col-sm-6'>
                                <div className='support-wrap mb-30'>
                                    <div className='support-icon'>
                                        <img src={item?.img} alt='24/7 support' />
                                    </div>
                                    <div className='support-content'>
                                        <h5>{item?.title}</h5>
                                        <p>{item?.shortDetails}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='row ml-3 mr-3 my-5'>
                    <div className='col-12'>
                        <SpaceBetween
                            title={'Shop by brand'}
                            href={'/all-brands'}
                            value={'See All'}
                        />
                    </div>
                    {
                        banner?.brands?.length > 0 &&
                        banner?.brands?.slice(0, 12)?.map(brand =>
                            <div key={brand?._id} className='col-6 col-sm-4 col-md-3 col-lg-2'>
                                <a href={`/products/${brand?.slug}?cid=${brand?.cid}&type=${brand?.type}`}>
                                    <div className='brand-card'>
                                        <img className='brand-image' src={productImgWithApi(brand?.brandImage)} alt={brand?.name} />
                                    </div>
                                </a>
                            </div>
                        )
                    }
                </div>
                {/* Samsung Mobile */}
                <div className='row ml-3 mr-3 my-5'>
                    <div className='col-12'>
                        <SpaceBetween
                            title={homePageProducts?.sumsung?.title}
                            href={homePageProducts?.sumsung?.href}
                            value={'See All'}
                        />
                    </div>
                    {productWithPage(sumsungProduct)}
                </div>
                {/* Xiaomi Mobile */}
                <div className='row ml-3 mr-3 my-5'>
                    <div className='col-12'>
                        <SpaceBetween
                            title={homePageProducts?.xiaomi?.title}
                            href={homePageProducts?.xiaomi?.href}
                            value={'See All'}
                        />
                    </div>
                    {productWithPage(xiaomiMobile)}
                </div>
            </div>
        </LayoutPage>
    );
};

export default Homepage;