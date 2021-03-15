/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './Sidebar.css';

const SidebarMenu = [
    { title: 'My Profile', href: '/myprofile' },
    { title: 'My Orders', href: '/accounts/orders' },
    { title: 'Plus Zone', href: '/pluszone' },
    { title: 'Gift Of Cards', href: '/gift-of-cards' },
    { title: 'Rewards', href: '/rewards' },
    { title: 'Notifications', href: '/notifications' },
]

const Sidebar = () => {
    return (
        <div className='side-bar ml-5'>
            <div className='side-bar-nav'>
                <ul className='nav-container'>
                    {
                        SidebarMenu?.map((item, index) =>
                            <li key={index} className='item'>
                                <a
                                    target="_blank"
                                    href={item?.href}
                                >
                                    <span>{item?.title}</span>
                                </a>
                            </li>
                        )
                    }
                    <li className='item'>
                        <p
                            onClick={() => {
                                window.location.reload()
                                localStorage.removeItem('token')
                                localStorage.removeItem('user')
                            }}
                        >
                            <span>{`Log Out`}</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;