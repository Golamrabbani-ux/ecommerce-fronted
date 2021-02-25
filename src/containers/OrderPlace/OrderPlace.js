import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LayoutPage from '../../components/LayoutPage/LayoutPage';
import '../containers.css';

const OrderPlace = () => {
    const {authenticate} = useSelector(state=> state?.auth)
    const [orderId, setOrderId] = useState('');
    useEffect(() => {
        const orderId = localStorage.getItem('orderid')
        setOrderId(orderId && JSON.parse(orderId))
    }, [])
    return (
        <LayoutPage>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 mt-5 text-center'>
                        <h1 className='h1-title'>
                            Your order has been accpted. Thanks for staying with us.<br />
                            Your Order Id: {orderId}
                        </h1>
                        <p>
                            To Track Your Order, Please <NavLink to='/order'>Click Here</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </LayoutPage>
    );
};

export default OrderPlace;