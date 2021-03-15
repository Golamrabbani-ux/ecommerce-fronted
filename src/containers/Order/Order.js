import React, { useEffect } from 'react';
import LayoutPage from '../../components/LayoutPage/LayoutPage';
import './Order.css';
import { useDispatch, useSelector } from 'react-redux';
import { getorders } from '../../redux/action/order.action';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import { productImgWithApi } from '../../urlConfig';
import Loading from '../../common/Loading/Loading'

const Order = () => {
    const dispatch = useDispatch();
    const { auth, order } = useSelector(state => state);
    // const loading = true
    useEffect(() => {
        auth?.authenticate && dispatch(getorders())
    }, [auth?.authenticate, dispatch])

    return (
        <LayoutPage>
            <div className='container-fluid'>
                {
                    order?.loading ?
                        <Loading />
                        :
                        auth?.authenticate ?
                            <div className='row'>
                                {
                                    !order?.order.length > 0 &&
                                    <h3 className='text-center text-muted mt-5'>Your order is empty</h3>
                                }
                                <div className='col-sm-8'>
                                    {
                                        order?.order?.length > 0 &&
                                        <>
                                            <div className='order-card'>
                                                <h4 className='my-order-title'>My Order</h4>
                                                <p>Your Total Order: {order?.order?.length}</p>
                                            </div>
                                            <div className='order-card'>
                                                {
                                                    order?.order?.map((od) =>
                                                        <div key={od?._id} className='order-middle'>
                                                            <a
                                                                href={`/order-details/${od?._id}`}
                                                                style={{ textDecoration: 'none' }}
                                                            >
                                                                <div key={od?._id} className='orderHeader'>
                                                                    <h6 className='mb-4'>
                                                                        Your Order ID: <span className='text-primary'>
                                                                            {od?._id}</span> ({od?.items?.length} items)
                                                                    </h6>
                                                                    <span className="status">{od?.paymentStatus}</span>
                                                                </div>
                                                                <div className='row'>
                                                                    {
                                                                        od?.items?.map((item, index) =>
                                                                            <div key={index} className='col-md-4 col-sm-6 col-12'>
                                                                                <div className='card-img-container'>
                                                                                    <img height='100px' width='120px' src={productImgWithApi(item?.productId?.productPictures[0]?.img)} alt={item?.productId?.productName} />
                                                                                </div>
                                                                                <div className='text-muted mb-3'>
                                                                                    <p style={{ marginBottom: '0' }}>{item?.productId?.productName}</p>
                                                                                    <small>TK. {item?.productId?.price}</small><br />
                                                                                    <small>Quantiry {item?.purchaseQty}</small>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    }
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                            :
                            <PrivateRoute />
                }
            </div>
        </LayoutPage>
    );
};

export default Order;