import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LayoutPage from '../../components/LayoutPage/LayoutPage'
import './Cart.css'
import CartItem from './CartItem';

const Cart = () => {
    let { cartItems } = useSelector(state => state?.cart);

    const cartArray = Object.keys(cartItems)?.map((key) => {
        return cartItems[key]
    })

    // Remove From cart item
    const handleDeleteCartProduct = (_id) => {
        
    }

    return (
        <LayoutPage>
            <div className='container-fluid py-4'>
                <div className='col-md-8'>
                    <div className='cart-custom-card'>
                        <div className='cart-header'>
                            <h4 className='my-cart'>My Cart(1)</h4>
                            <div className='d-inline'>
                                <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg==' alt='location' />
                                <small className='delevery-title'>Delevery to</small>
                            </div>
                        </div>
                        {
                            cartArray?.map((cartItem, index) =>
                                <CartItem
                                    key={index}
                                    cartItem={cartItem}
                                    handleDeleteCartProduct={handleDeleteCartProduct}
                                />
                            )
                        }
                        <div className='cart-footer'>
                            <button className='place-order-btn'>Place Order</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'></div>
            </div>
        </LayoutPage>
    );
};

export default Cart;