import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className='d-flex align-items-center' style={{height: '50vh'}}>
            <div className="loader">Loading...</div>
        </div>

    );
};

export default Loading;