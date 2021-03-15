import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomModal from '../../common/CustomModal';
import { userLogin, userSignUp } from '../../redux/action/auth.action';
import './Header.css';

const LoginForm = (props) => {
    const { show, setShow } = props;
    const dispatch = useDispatch();
    const  { error } = useSelector(state => state?.auth);
    const [customError, setCustomError] = useState('');
    const [toggle, setToggle] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(()=>{
        setCustomError(error)
    },[error])

    const handleSignSubmit = (e) => {
        e.preventDefault();
        const userInfo = {
            email,
            password
        }
        dispatch(userLogin(userInfo, setShow))
    }

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        const userInfo = {
            firstName,
            lastName,
            email,
            password
        }
        dispatch(userSignUp(userInfo, setShow))
    }


    const renderLogin = () => {
        return (
            <div className='row px-0' style={{ minHeight: '350px', marginLeft: '-16px' }}>
                <div className='col-sm-4 login-left-side'>
                    <div className='pt-3 text-white'>
                        <h4>Login</h4>
                        <small>Get access to your Orders, Wishlist and Recommendations</small>
                    </div>
                </div>
                <div className='col-sm-8 px-0'>
                    <form onSubmit={handleSignSubmit} className='pt-5 px-3'>
                        <small className='error-text'>{customError}</small>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            name='email'
                            type='email'
                            className='login-input'
                            placeholder='Enter your email'
                        />
                        <div className='forgot-align'>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                name='password'
                                type='password'
                                minLength={6}
                                required={true}
                                className='login-input'
                                placeholder='Enter your password'
                            />
                            <span
                                className='forget-password'
                            >
                                Forgot?</span>
                        </div>
                        <small>
                            You agree to <a href='/terms' target='_blank'>Terms of Use</a> and <a href='/privacy' target='_blank'>Privacy Policy</a>
                        </small>
                        <button type='submit' className='login-button my-2'>Login</button>
                        <span
                            onClick={() => {
                                setToggle(!toggle);
                                setFirstName('');
                                setLastName('');
                                setEmail('');
                                setPassword('');
                                setCustomError('')
                            }}
                            className='create-account'
                        >
                            Create an account
                        </span>
                    </form>
                </div>
            </div>
        )
    }
    const renderSignUp = () => {
        return (
            <div className='row px-0' style={{ minHeight: '350px', marginLeft: '-16px' }}>
                <div className='col-sm-4 login-left-side'>
                    <div className='pt-3 text-white'>
                        <h4>Sign-up</h4>
                        <small>Get access to your Orders, Wishlist and Recommendations</small>
                    </div>
                </div>
                <div className='col-sm-8 px-0'>
                    <form onSubmit={handleSignUpSubmit} className='pt-5 px-3'>
                        <small className='error-text'>{customError}</small>
                        <input
                            onChange={(e) => setFirstName(e.target.value)}
                            name='firstName'
                            type='text'
                            className='login-input'
                            required={true}
                            minLength='3'
                            maxLength='20'
                            placeholder='Enter first name'
                        />
                        <input
                            onChange={(e) => setLastName(e.target.value)}
                            name='lastName'
                            type='text'
                            required={true}
                            minLength='3'
                            maxLength='20'
                            className='login-input'
                            placeholder='Enter last name'
                        />
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            name='email'
                            type='email'
                            required={true}
                            className='login-input'
                            placeholder='Enter your email'
                        />
                        <div className='forgot-align'>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                name='password'
                                type='password'
                                required='true'
                                minLength={6}
                                className='login-input'
                                placeholder='Enter your password'
                            />
                        </div>
                        <small>
                            You agree to <a href='/terms' target='_blank'>Terms of Use</a> and <a href='/privacy' target='_blank'>Privacy Policy</a>
                        </small>
                        <button type='submit' className='login-button my-2'>Register</button>
                        <span
                            onClick={() => {
                                setToggle(!toggle);
                                setEmail('')
                                setPassword('')
                                setCustomError('')
                            }}
                            className='create-account mb-2'
                        >
                            Exisiting user? Login
                        </span>
                    </form>
                </div>
            </div>
        )
    }


    return (
        <CustomModal
            show={show}
            size="md"
            handleClose={() => setShow(false)}
            customCss={{ margin: '0', paddingTop: '0', paddingBottom: '0' }}
        >
            {
                toggle ? renderSignUp()
                    : renderLogin()
            }
        </CustomModal>
    );
};

export default LoginForm;