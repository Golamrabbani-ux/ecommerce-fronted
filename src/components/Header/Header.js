import React, { useState } from 'react';
import logo from '../../others/logo.png'
import { IoAddCircleOutline, IoDownloadOutline, IoGiftOutline, IoHeartOutline, IoLogInOutline, IoMedkitOutline, IoMoveSharp, IoNotificationsOutline, IoPersonCircleOutline, IoSearchOutline, IoShareSocialOutline } from "react-icons/io5";
import './Header.css';
import CustomDropdown from '../../common/CustomDropdown';
import LoginForm from './LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const dropdownLoginMenu = [
    { label: 'My Profile', logo: <IoPersonCircleOutline />, href: '/myprofile' },
    { label: 'Plus Zone', logo: <IoAddCircleOutline />, href: '/pluszone' },
    { label: 'Orders', logo: <IoMedkitOutline />, href: '/orders' },
    { label: 'Gift Of Cards', logo: <IoGiftOutline />, href: '/gift-of-cards' },
    { label: 'Rewards', logo: <IoMoveSharp />, href: '/rewards' },
]
const dropdownLoggedInUserMenu = [
    { label: 'My Profile', logo: <IoPersonCircleOutline />, href: '/myprofile' },
    { label: 'Plus Zone', logo: <IoAddCircleOutline />, href: '/pluszone' },
    { label: 'Orders', logo: <IoMedkitOutline />, href: '/orders' },
    { label: 'Gift Of Cards', logo: <IoGiftOutline />, href: '/gift-of-cards' },
    { label: 'Rewards', logo: <IoMoveSharp />, href: '/rewards' },
    { label: 'Notifications', logo: <IoNotificationsOutline />, href: '/notifications' },
]
const dropdownMoreMenu = [
    { label: 'Notification', logo: <IoNotificationsOutline /> },
    { label: '24 x 7 Our Customer Care', logo: <IoHeartOutline /> },
    { label: 'Advertise', logo: <IoShareSocialOutline /> },
    { label: 'Download App', logo: <IoDownloadOutline /> }
]


const Header = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const { authenticate, user } = useSelector(state => state?.auth);

    return (
        <div className='container-fluid p-0'>
            <div className='header-main'>
                <div className='row'>
                    <div className='col-md-2'>
                        <a href='/' className='brand-wrap'>
                            <img src={logo} alt='brand' />
                        </a>
                    </div>
                    <div className='col-md-6'>
                        <form className='header-form' style={{ marginRight: '2rem' }}>
                            <div className='input-group w-100'>
                                <input className='form-control' placeholder='search ' />
                                <div className='input-group-append'>
                                    <button className='btn btn-primary'>
                                        <IoSearchOutline />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-1'>
                        {
                            !authenticate ?
                                <CustomDropdown
                                    btn={"Login"}
                                >
                                    <div
                                        onClick={() => setShow(true)}
                                        className='dropdown-class d-flex align-items-center'
                                    >
                                        <span style={{ fontWeight: '600' }}>New Customer? </span>
                                        <span className='dropdown-a'>Sign up</span>
                                    </div>
                                    {
                                        dropdownLoginMenu?.map((item, index) =>
                                            <div key={index} className='dropdown-class d-flex align-items-center'>
                                                <span>{item?.logo}</span>
                                                <NavLink className='dropdown-a' to={`${item?.href}`} >{item?.label}</NavLink>
                                            </div>
                                        )
                                    }
                                </CustomDropdown>
                                :
                                <CustomDropdown
                                    loginUser={user?.fullName}
                                >
                                    {
                                        dropdownLoggedInUserMenu?.map((item, index) =>
                                            <div key={index} className='dropdown-class d-flex align-items-center'>
                                                <span>{item?.logo}</span>
                                                <NavLink className='dropdown-a' to={`${item?.href}`} >{item?.label}</NavLink>
                                            </div>
                                        )
                                    }
                                    <div
                                        onClick={() => {
                                            localStorage.clear();
                                        }}
                                        className='dropdown-class d-flex align-items-center'
                                    >
                                        <IoLogInOutline />
                                        <span className='dropdown-a'>Logout</span>
                                    </div>
                                </CustomDropdown>
                        }
                    </div>
                    <div className='col-md-1'>
                        <CustomDropdown
                            span={"More."}
                        >
                            {
                                dropdownMoreMenu?.map((item, index) =>
                                    <div key={index} className='dropdown-class d-flex align-items-center'>
                                        <span>{item?.logo}</span>
                                        <NavLink className='dropdown-a' to={`${item?.href}`} >{item?.label}</NavLink>
                                    </div>
                                )
                            }
                        </CustomDropdown>
                    </div>
                    <div className='col-md-1'>{`Cart`}</div>
                </div>
            </div>
            {/* Login Area  */}
            <LoginForm
                show={show}
                setShow={setShow}
            />
        </div>
    );
};

export default Header;