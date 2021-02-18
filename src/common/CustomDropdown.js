import React from 'react';
import './common.css';

const CustomDropdown = (props) => {
    return (
        <div className='dropdown'>
            {
                props?.span ?
                    <h6 className='mt-2'><span className='dropdown-show'>{props.span}</span></h6> 
                : props?.loginUser ? <span style={{fontWeight: '600', display: 'inline'}}>{props.loginUser}</span>
                : <button className='login-btn'>{props.btn}</button>
            }
            <div className='dropdown-content'>
                {props.children}
            </div>
        </div>
    );
};

export default CustomDropdown;