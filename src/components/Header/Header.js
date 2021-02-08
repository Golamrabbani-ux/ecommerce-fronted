import React, { useState } from 'react';
import logo from '../../others/logo.png'
import { IoAddCircleOutline, IoDownloadOutline, IoGiftOutline, IoHeartOutline, IoMedkitOutline, IoMoveSharp, IoNotificationsOutline, IoPersonCircleOutline, IoSearchOutline, IoShareSocialOutline } from "react-icons/io5";
import './Header.css';
import CustomDropdown from '../../common/CustomDropdown';
import LoginForm from './LoginForm';

const dropdownLoginMenu = [
    { label: 'My Profile', logo: <IoPersonCircleOutline /> },
    { label: 'Plus Zone', logo: <IoAddCircleOutline /> },
    { label: 'Orders', logo: <IoMedkitOutline /> },
    { label: 'Gift Of Cards', logo: <IoGiftOutline /> },
    { label: 'Rewards', logo: <IoMoveSharp /> },
]
const dropdownMoreMenu = [
    { label: 'Notification', logo: <IoNotificationsOutline /> },
    { label: '24 x 7 Our Customer Care', logo: <IoHeartOutline /> },
    { label: 'Advertise', logo: <IoShareSocialOutline /> },
    { label: 'Download App', logo: <IoDownloadOutline /> }
]

const Header = () => {
    const [show, setShow] = useState(false);

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
                                    <div className='dropdown-class d-flex align-items-center'>
                                        <span>{item?.logo}</span>
                                        <a className='dropdown-a' href='/' >{item?.label}</a>
                                    </div>
                                )
                            }
                        </CustomDropdown>

                    </div>
                    <div className='col-md-1'>
                        <CustomDropdown
                            span={"More."}
                        >
                            {
                                dropdownMoreMenu?.map((item, index) =>
                                    <div className='dropdown-class d-flex align-items-center'>
                                        <span>{item?.logo}</span>
                                        <a className='dropdown-a' href='/' >{item?.label}</a>
                                    </div>
                                )
                            }
                        </CustomDropdown>
                    </div>
                    <div className='col-md-1'>Cart</div>
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