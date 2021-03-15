
import React, { useEffect, useState } from 'react';
import CustomAccordion from '../../common/CustomAccordion';
import Layout from '../../components/LayoutPage/LayoutPage'
import { RiCaravanLine } from "react-icons/ri";
import { IoNotificationsOutline, IoStarSharp } from 'react-icons/io5';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/action/auth.action';
import { getUserAddress } from '../../redux/action/address.action';
import './Checkout.css';
import NewAddress from './NewAddress';
import CustomHeader from '../../common/CustomHeader';
import Cart from '../Cart/Cart';
import CartCalculation from '../../components/CartCalculation/CartCalculation';
import { addOrder } from '../../redux/action/order.action';



const Checkout = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { auth, address, cart } = useSelector(state => state);
    const { authenticate, user, error } = auth;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [userAddress, setUserAddress] = useState([]);
    const [confirmedAddress, setConfirmedAddress] = useState({})
    const [confirmedAddressTrue, setConfirmedAddressTrue] = useState(false);
    const [procedToPayment, setProcedToPayment] = useState(false);
    const [orderSummaryDeActive, setOrderSummaryDeActive] = useState(false);

    const cartArray = Object.keys(cart?.cartItems)?.map((key) => cart?.cartItems[key]);
    // Users Address get request
    useEffect(() => {
        setTimeout(() => {
            authenticate && dispatch(getUserAddress())
        }, 1000)
    }, [authenticate, dispatch]);

    // adress array added selected and edit
    useEffect(() => {
        const newAddress = address?.address?.map(adr => ({ ...adr, selected: false, edit: false }));
        setUserAddress(newAddress);
    }, [address?.address])

    // Selected address for delevery
    const selectedAddress = (adr) => {
        const newAddress = userAddress?.map(address => address?._id === adr?._id ? { ...address, selected: true } : { ...address, selected: false })
        setUserAddress(newAddress)
    }

    // Delevery Confirmed address
    const deleveryConfirmedDetails = (adr) => {
        setConfirmedAddress(adr)
        setConfirmedAddressTrue(true)
    }


    const signInSingnUpAccordion = () => {
        return (
            <div className='row'>
                <div className='col-sm-6'>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            dispatch(userLogin({ email, password }))
                        }}
                    >
                        <small className='error-text'>{error}</small>
                        <input
                            className='checkout-input'
                            placeholder='Enter Your Email'
                            required={true}
                            type='email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className='checkout-input'
                            placeholder='Password'
                            required={true}
                            type='password'
                            minLength='3'
                            maxLength='20'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <small className='mt-3'>By continuing, you agree to ecommerce <Link to='/'>Terms of use</Link> and <Link to='/'>Privacy Ploicy</Link> </small>
                        <br />
                        <button type='submit' className='btn-continue'>Continue</button>
                    </form>
                </div>
                <div className='col-sm-6'>
                    <small className='text-muted'>Advantages of our secure login</small>
                    <div className='mt-3'>
                        <div className='d-flex'>
                            <RiCaravanLine size='22' />
                            <p className='checkout-common-p'>Easily Track Orders, Hassle free Returns</p>
                        </div>
                        <div className='d-flex'>
                            <IoNotificationsOutline size='22' />
                            <p className='checkout-common-p'>Get Relevant Alerts and Recommendation</p>
                        </div>
                        <div className='d-flex'>
                            <IoStarSharp size='22' />
                            <p className='checkout-common-p'>Wishlist, Reviews, Ratings and more.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const deleveryAddress = () => {
        return (
            <div className="media" >
                <span
                    className='add-new-address'
                    onClick={() => setShow(true)}
                >
                    Add new address
                </span>
                <div className='row'>
                    <div className='col-lg-12 my-1'>
                        {
                            userAddress?.length > 0 &&
                            userAddress?.map((adr, index) =>
                                <div key={index} className="media-body mb-2">
                                    <div className='d-flex'>
                                        <input
                                            name='address'
                                            style={{ marginTop: '4px' }}
                                            type='radio'
                                            onChange={() => selectedAddress(adr)}
                                        />
                                        <p className='adr-name ml-1'>{adr?.fullName}</p>
                                    </div>
                                    <div className='ml-3'>
                                        <small className='mr-2'>{adr?.mobileNumber}</small>
                                        <small>{adr?.email}</small><br />
                                        <span className={adr?.addressType === 'Home' ? 'adr-type' : 'adr-type-dafault'}>
                                            {adr?.addressType}
                                        </span>
                                        <span>{adr?.area},</span>
                                        <span className='mx-1'>{adr?.city},</span>
                                        <span>{adr?.region}</span>
                                    </div>
                                    <div className='ml-3 my-2'>
                                        {
                                            adr?.selected &&
                                            <button
                                                className='delevery-her-btn'
                                                onClick={() => deleveryConfirmedDetails(adr)}
                                            >
                                                Delevery Here
                                            </button>
                                        }
                                        {
                                            adr?.edit &&
                                            <button>Edit</button>
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }

    const orderConfirm = () => {
        const totalAmount = cartArray?.reduce((acc, currentItem) => {
            return acc + parseFloat(currentItem?.price) * parseInt(currentItem.qty);;
        }, 0);
        const items = cartArray?.map((pd) => ({ productId: pd?._id, payablePrice: pd?.price, purchaseQty: pd?.qty }))
        const orderPayload = {
            addressId: confirmedAddress._id,
            totalAmount: totalAmount,
            paymentStatus: "pending",
            paymentType:"cod",
            items: items
        }
        dispatch(addOrder(orderPayload, history))
    }

    return (
        <Layout>
            <div className='container-fluid'>
                <div className='row mx-3 my-4'>
                    <div className='col-md-7'>
                        {
                            !authenticate ?
                                <>
                                    <CustomAccordion
                                        header={'LOGIN OR SIGNUP'}
                                        body={signInSingnUpAccordion()}
                                        activeKey={"0"}
                                        className={'custom-card-header'}
                                        serialNo={1}
                                        selected={user?.email}
                                    />
                                    <CustomHeader
                                        title={'DELEVERY ADDRESS'}
                                        serialNo={2}
                                        body={""}
                                    />
                                    <CustomHeader
                                        title={'ORDER SUMMARY'}
                                        serialNo={3}
                                        body={""}
                                    />
                                    <CustomHeader
                                        title={'PAYMENTS OPTIONS'}
                                        serialNo={4}
                                        body={""}
                                    />
                                </>
                                :
                                <>
                                    <CustomHeader
                                        title={'LOGIN OR SIGNUP'}
                                        serialNo={1}
                                        body={user?.email}
                                    />
                                    {
                                        !confirmedAddressTrue ?
                                            <CustomAccordion
                                                header={'DELEVERY ADDRESS'}
                                                body={deleveryAddress()}
                                                activeKey={"0"}
                                                className={`custom-card-header`}
                                                serialNo={2}
                                            />
                                            :
                                            <CustomHeader
                                                title={'DELEVERY ADDRESS'}
                                                serialNo={2}
                                                body={""}
                                                details={confirmedAddress}
                                                cancelBtn={setConfirmedAddressTrue}
                                                btnValue={`Change`}
                                            />

                                    }
                                    {
                                        confirmedAddressTrue && !orderSummaryDeActive ? //It lines very important for me (Again order summary deActive)
                                            <CustomAccordion
                                                header={'ORDER SUMMARY'}
                                                body={<Cart onlyCartItems={true} setProcedToPayment={setProcedToPayment} setOrderSummaryDeActive={setOrderSummaryDeActive} />}
                                                activeKey={"0"}
                                                className={`custom-card-header`}
                                                serialNo={3}
                                            />
                                            :
                                            <CustomHeader
                                                title={'ORDER SUMMARY'}
                                                serialNo={3}
                                                body={orderSummaryDeActive && `Your Order Total Item: ${cartArray?.length}`}
                                                cancelBtn={orderSummaryDeActive && setOrderSummaryDeActive}
                                                btnValue={`Show`}
                                            />
                                    }
                                    {
                                        procedToPayment ?
                                            <CustomAccordion
                                                header={'PAYMENT OPTIONS'}
                                                body={
                                                    <button
                                                        onClick={orderConfirm}
                                                        className='order-confirm'>
                                                        Order Confirm
                                                    </button>
                                                }
                                                activeKey={"0"}
                                                className={`custom-card-header`}
                                                serialNo={4}
                                            />
                                            :
                                            <CustomHeader
                                                title={'PAYMENT OPTIONS'}
                                                serialNo={4}
                                                body={""}
                                            />
                                    }
                                </>
                        }
                    </div>
                    <div className='col-md-5'>
                        <CartCalculation cartArray={cartArray} />
                    </div>
                </div>
            </div>
            {/* Add new address */}
            <NewAddress
                show={show}
                setShow={setShow}
            />
        </Layout>
    );
};
export default Checkout;