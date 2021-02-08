import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getProductByPage } from '../../redux/action/product.action';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../containers.css';

const ProductPage = (props) => {
    const dispatch = useDispatch();
    const { product } = useSelector((state) => state, shallowEqual);
    const { page } = product;
    const params = props;

    useEffect(() => {
        dispatch(getProductByPage(params))
    }, [dispatch, params])

    return (
        <div className='container-fluid'>
            <div className='row'>
                <h3>{page.title}</h3>
                <Carousel
                    renderThumbs={() => { }}
                >
                    {
                        page?.banners?.map((banner) =>
                            <a
                                key={banner?._id}
                                href={banner?.navigateTo}
                                style={{ display: "block" }}
                            >
                                <img style={{ height: "400px" }} src={banner?.img} alt={page?.title} />
                            </a>
                        )
                    }
                </Carousel>
            </div>
            <div className='row mt-3 my-5'>
                {
                    page?.productsPictures?.map((product) =>
                        <div key={product?._id} className='col-lg-4 col-md-6'>
                            <a
                                href={product?.navigateTo}
                                style={{ display: "block" }}
                            >
                                <img
                                    src={product?.img}
                                    alt={page.title} 
                                    style={{width: '100%', height: "auto"}}
                                />
                            </a>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ProductPage;