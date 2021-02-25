import React from 'react';

import '../components.css'

const CartCalculation = ({ cartArray }) => {
    const price = cartArray?.reduce((acc, currentItem) => {
        return acc + parseFloat(currentItem?.price) * parseInt(currentItem.qty);;
    }, 0);
    const deleveryCharge = (price) => {
        let deleveryCharge = 0;
        if (price <= 5000) {
            deleveryCharge = 150;
        }
        else if (price > 5000 && price <= 10000) {
            deleveryCharge = 100;
        }
        else if (price > 10000 && price <= 15000) {
            deleveryCharge = 50;
        }
        else {
            deleveryCharge = 0
        }
        return deleveryCharge
    }
    return (
        <div className='cart-cal-div'>
            <div className='cart-cal-div-header'>
                <h6 className='mt-1'>PRICE DETAILS</h6>
            </div>
            <div className='text-muted px-3 my-2'>
                <div className='d-flex justify-content-between'>
                    <p className='cart-calculation-p'>Total {cartArray?.length > 1 ? 'Items' : 'Item'}</p>
                    <p className='cart-calculation-p'>{cartArray?.length}</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <p className='cart-calculation-p'>Price</p>
                    <p className='cart-calculation-p'>BDT {price?.toFixed(2)}</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <p className='cart-calculation-p'>Delevery Charge</p>
                    <p className='cart-calculation-p'>{deleveryCharge(price) === 0 ? "Free" : deleveryCharge(price)?.toFixed(2)}</p>
                </div>
            </div>
            <div className='text-muted px-3'>
                <div className='d-flex justify-content-between py-4' style={{ borderTop: '1px dotted dimgrey'}}>
                    <h6 style={{fontWeight: 'bold', color: 'black'}}>Total Amount</h6>
                    <h6 style={{fontWeight: 'bold', color: 'black'}}>BDT {price + deleveryCharge(price)}</h6>
                </div>
            </div>
        </div>
    );
};

export default CartCalculation;