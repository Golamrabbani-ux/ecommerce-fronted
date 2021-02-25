import React from 'react';

const CustomHeader = (props) => {
    return (
        <div className='custom-header'>
            <span className='mr-2'>{props?.serialNo}</span>{props?.title}
            <div className='ml-3'>
                <small>
                    { props?.body && props?.body }
                </small>
                {
                    props?.details &&
                    <small>{props?.details?.area}, {props?.details?.city}, {props?.details?.region}</small>
                }
            </div>
            {
                props?.cancelBtn &&
                <button onClick={()=> props?.cancelBtn(false)} className='cancel-address-btn'>
                    {props?.btnValue}
                </button>
            }
        </div>
    );
};

export default CustomHeader;