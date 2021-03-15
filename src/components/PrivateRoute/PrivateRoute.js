import React, { useState } from 'react';
import LoginForm from '../Header/LoginForm';

const loginButtoncss = {
    width: "150px",
    padding: "8px 0px",
    marginTop: '20px',
    background: "#fb641b",
    bosShadow: "0 1px 2px 0 rgb(0 0 0 / 20 %)",
    border: "none",
    color: "#fff",
    fontWeight: "600",
    letterSpacing: "1px"
}

const PrivateRoute = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='row'>
            <div className='col-12 mt-5 mb-2 text-center text-muted'>
                <h4>Can't access this page. You can login please.</h4>
                <button onClick={()=> setShow(true)} style={loginButtoncss}>Login</button>
            </div>
            <LoginForm show={show} setShow={setShow} />
        </div>
    );
};

export default PrivateRoute;