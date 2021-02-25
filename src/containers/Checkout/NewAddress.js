import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CustomModal from '../../common/CustomModal';
import { addNewAddress } from '../../redux/action/address.action';
import './Checkout.css';



const NewAddress = (props) => {
    const dispatch = useDispatch()
    const [fullName, setFullName] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [email, setEmail] = useState('')
    const [region, setRegion] = useState('')
    const [city, setCity] = useState('')
    const [area, setArea] = useState('')
    const [address, setAddress] = useState('')
    const [addressType, setAddressType] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const adressInfo = {
            fullName, 
            mobileNumber, 
            email,
            region, 
            city, 
            area, 
            address, 
            addressType
        }
        dispatch(addNewAddress(adressInfo));
        props?.setShow(false)
    } 

    return (
        <CustomModal
            show={props?.show}
            size={"lg"}
            handleClose={() => props?.setShow(false)}
            centered={"centered"}
        >
            <h3 className='new-address'>Add new shipping Address</h3>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-md-6'>
                        <input
                            className='new-address-input'
                            name='name'
                            type='text'
                            required='true'
                            minLength={3}
                            maxLength={10}
                            placeholder='Enter your name'
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div className='col-md-6'>
                        <input
                            className='new-address-input'
                            name='phoneNumber'
                            type='text'
                            required='true'
                            minLength={3}
                            maxLength={11}
                            placeholder='Enter your phone number'
                            onChange={(e) => setMobileNumber(e.target.value)}
                        />
                    </div>
                    <div className='col-md-6'>
                        <input
                            className='new-address-input'
                            name='email'
                            type='email'
                            required='true'
                            placeholder='Enter your phone number'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='col-md-6'>
                        <input
                            className='new-address-input'
                            name='region'
                            type='text'
                            required='true'
                            minLength={3}
                            maxLength={20}
                            placeholder='Enter your region'
                            onChange={(e) => setRegion(e.target.value)}
                        />
                    </div>

                    <div className='col-md-6'>
                        <input
                            className='new-address-input'
                            name='city'
                            type='text'
                            required='true'
                            minLength={3}
                            maxLength={11}
                            placeholder='Enter your city'
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>

                    <div className='col-md-6'>
                        <input
                            className='new-address-input'
                            name='area'
                            type='text'
                            required='true'
                            minLength={3}
                            maxLength={11}
                            placeholder='Enter your area'
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className='col-md-6'>
                        <input
                            name='localLocation'
                            className='new-address-input'
                            type='text'
                            required='true'
                            minLength={5}
                            maxLength={200}
                            placeholder='For Example: House# 123, Street# 123, ABC Road'
                            onChange={(e) => setArea(e.target.value)}
                        />
                    </div>
                    <div className='col-md-6'>
                        <div className='d-flex'>
                            <span 
                                className={addressType === "Home" ? 'delevery-type delevery-home-active' : 'delevery-type'}
                                onClick={() => setAddressType('Home')}
                            >
                                Home
                            </span>
                            <span 
                                className={addressType === "Office" ? 'delevery-type delevery-office-active' : 'delevery-type'}
                                onClick={() => setAddressType('Office')}
                            >
                                Office
                            </span>
                        </div>
                    </div>
                </div>
                <button 
                    className='delevery-save-btn'
                    type='submit'>
                    Submit
                </button>
            </form>
        </CustomModal>
    );
};

export default NewAddress;