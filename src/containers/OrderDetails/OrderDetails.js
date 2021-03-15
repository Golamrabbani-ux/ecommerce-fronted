import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import LayoutPage from '../../components/LayoutPage/LayoutPage';
import { getSingleOrder } from '../../redux/action/order.action';
import { productImgWithApi } from '../../urlConfig';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute'

import './OrderDetails.css';
import Loading from '../../common/Loading/Loading';
import dateFormat from '../../helper/dateFormat';
import Sidebar from '../../components/Sidebar/Sidebar';

const OrderDetails = () => {
    const { orderId } = useParams();
    const dispatch = useDispatch();
    const { address, singleOrder, loading } = useSelector(state => state?.order);
    const { authenticate } = useSelector(state => state?.auth);
    const { fullName, area, city, email, mobileNumber, region } = address;
    const { _id, totalAmount, items, orderStatus } = singleOrder;

    useEffect(() => {
        if (orderId && authenticate) {
            dispatch(getSingleOrder({ orderId }))
        }
    }, [authenticate, dispatch, orderId])

    return (
        <LayoutPage>
            <div className='container-fluid mt-5'>
                {
                    !authenticate ?
                        <PrivateRoute /> :
                        loading ?
                            <Loading />
                            :
                            <div className='custom-container'>
                                <Sidebar />
                                <div className='right-bar'>
                                    < div className='delevery-card'>
                                        <div className='d-flex justify-content-between ' style={{ fontWeight: '600' }}>
                                            <p>Order Id: #{_id}</p>
                                            <p><span className='text-muted'>Total:</span> {totalAmount}TK.</p>
                                        </div>
                                        <center>
                                            <div className="orderTrack">
                                                {
                                                    orderStatus?.map(status =>
                                                        <div key={status?._id} className={status.isCompleted ? 'orderStatus active' : 'orderStatus'}>
                                                            <div className={status.isCompleted ? `point active` : 'point'}></div>
                                                            <div className="orderInfo">
                                                                <div className="status">{status?.type}</div>
                                                                <div className="date" style={{ marginTop: '30px' }}>
                                                                    {status?.date ? dateFormat(new Date(status?.date)) : ''}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </center>
                                        {
                                            items?.map(item =>
                                                <div className='order-item'>
                                                    <div className='item-pic'>
                                                        <img src={productImgWithApi(item?.productId?.productPictures[0]?.img)} alt='' />
                                                    </div>
                                                    <div className='item-main'>
                                                        <p className='item-name'>{item?.productId?.productName}</p>
                                                    </div>
                                                    <p className='item-price-qty'>TK. {item?.payablePrice}</p>
                                                    <p className='item-price-qty'>Qty: {item?.purchaseQty}</p>
                                                </div>
                                            )
                                        }
                                        <div>

                                        </div>
                                        <div className='deleveri-area'>
                                            <h5 className='delivery-title'>Delivery Address</h5>
                                            <p style={{ marginBottom: '0' }}>{fullName}</p>
                                            <small>{`${area}, ${region}, ${city}`}</small><br />
                                            <small>{mobileNumber}</small><br />
                                            <small>{email}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                }
            </div>
        </LayoutPage>
    );
};

export default OrderDetails;