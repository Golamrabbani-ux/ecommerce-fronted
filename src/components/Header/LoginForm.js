import React from 'react';
import CustomModal from '../../common/CustomModal';
import './Header.css';

const LoginForm = (props) => {
    const { show, setShow } = props;


    return (
        <CustomModal
            show={show}
            size="md"
            handleClose={() => setShow(false)}
            customCss={{ margin: '0', paddingTop: '0', paddingBottom: '0' }}
        >
            <div className='row px-0' style={{ minHeight: '350px', marginLeft: '-16px' }}>
                <div className='col-sm-4 login-left-side'>
                    <div className='pt-3 text-white'>
                        <h4>Login</h4>
                        <small>Get access to your Orders, Wishlist and Recommendations</small>
                    </div>
                </div>
                <div className='col-sm-8 px-0'>
                    <form className='pt-5 px-3'>
                        <input
                            type='email'
                            className='login-input'
                            placeholder='Enter your email'
                        />
                        <div className='forgot-align'>
                            <input
                                type='password'
                                className='login-input'
                                placeholder='Enter your password'
                            />
                            <span className='forget-password'>Forgot?</span>
                        </div>
                        <small>
                            You agree to <a href='/terms' target='_blank'>Terms of Use</a> and <a href='/privacy' target='_blank'>Privacy Policy</a>
                        </small>
                        <button type='button' className='login-button my-2'>Login</button>
                        <span className='create-account'>Create an account</span>
                    </form>
                </div>
            </div>
        </CustomModal>
    );
};

export default LoginForm;