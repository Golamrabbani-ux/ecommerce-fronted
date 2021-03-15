import React from 'react';
import { Link } from 'react-router-dom';

const SpaceBetween = (props) => {
    return (
        <div className='d-flex justify-content-between mb-2'>
            <h4 className='title-h6'>{props?.title || ""}</h4>
            <Link to={props?.href}>{props?.value}</Link>
        </div>
    );
};

export default SpaceBetween;