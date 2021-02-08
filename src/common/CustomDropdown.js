import React from 'react';
import './common.css';

const CustomDropdown = (props) => {
    return (
        <div className='dropdown'>
            {
                props?.span ?
                    <h6 className='mt-2'><span className='dropdown-show'>{props.span}</span></h6>
                : <button className='login-btn'>{props.btn}</button>
            }
            <div className='dropdown-content'>
                {props.children}
            </div>
        </div>
    );
};

export default CustomDropdown;