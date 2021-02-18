import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/action/cart.action';
import { productImgWithApi } from '../../urlConfig';

const CartItem = ({ cartItem, handleDeleteCartProduct }) => {
    const dispatch = useDispatch();
    
    return (
        <div className='cart-desc'>
            {/* {console.log("cartItem", cartItem)} */}
            <div className='row'>
                <div className='col-sm-3'>
                    <div className='row'>
                        <div className='cart-image-container'>
                            <img className='cart-image-product' src={productImgWithApi(cartItem?.img)} alt={cartItem?.productName} />
                        </div>
                    </div>
                </div>
                <div className='col-sm-9 mb-2'>
                    <div className='product-description'>
                        <p className='product-name'>{cartItem?.productName}</p>
                        <div className='cart-size-and-seller text-muted'>
                            <p>Size: <span></span></p>
                            <p style={{ marginTop: '-13px' }}>Seller: <span></span></p>
                        </div>
                        <div>
                            <h6 className='product-price'>₹ {cartItem?.price} <span className='old-price'>₹ 3214</span></h6>
                        </div>
                        <div className='row'>
                            <div className='col-sm-4 col-md-4 col-lg-3'>
                                <div className='mt-4 d-flex'>
                                    <button
                                        disabled={cartItem?.qty <= 1}
                                        className='cart-btn'
                                        onClick={() => {
                                            if (!cartItem?.qty <= 1) {
                                                dispatch(addToCart(cartItem, -1))
                                            }
                                        }}
                                    >
                                        -
                                    </button>
                                    <input value={cartItem?.qty} className='cart-quantity' disabled />
                                    <button
                                        className='cart-btn'
                                        onClick={() => {
                                            dispatch(addToCart(cartItem, 1))
                                        }}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className='col-sm-8 col-md-8 col-lg-5'>
                                <div className='mt-4 d-flex text-bold'>
                                    <h6>Save For Later</h6>
                                    <h6 
                                        onClick={() => handleDeleteCartProduct(cartItem?._id)}
                                        className='ml-2'
                                    >   
                                        Remove
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;