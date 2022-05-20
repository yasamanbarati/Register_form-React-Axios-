import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';

const Login = () => {

    //state
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [data, setdata] = useState([]);
    const [emailError, setemailError] = useState('');

    //Email confirmation
    const validateEmail = (e) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setemailError('Valid Email :)')
        } else {
            setemailError('Enter valid Email!')
        }
    }

    // Get Data
    const getUserData = () => {
        axios.get('https://yasamanproject-8481b-default-rtdb.firebaseio.com/data').then(res => {
            setdata(res.data)
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getUserData()
    }, [])

    // Send Data
    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            email : email,
            password : password
        }
        if ( email.trim().length === 0 || password.trim().length === 0){
            alert('Enter email and password')
        }
        else if ( password.trim().length < 8 ){
            alert('Enter the password correctly !! (8-digit password length)')
        }
        else {
            const result = data.some((item) => item.email === email && item.password === password) //true or fulse
            
            if (result) {
                alert('Welcome :)')
            }else{
                alert('Please check the information')
            }
        }
    }

    const handleChangeEmail = (e) => {
        validateEmail(e);
        setemail(e.target.value)
    }
    const handleChangePass = (e) => {
        setpassword(e.target.value)
    }

    return (
        <Fragment>
            <div className="container">
                <div className="form_box row justify-content-center align-items-center">
                    <div className="border border-3 col-lg-5 col-md-8 col-sm-10 col-10 form-block p-4">
                        <div className="row justify-content-center align-items-center">
                            <h4 className="form_title text-center mb-4">
                                Login
                            </h4>
                            <form className="col-lg-10 d-flex flex-column justify-content-center align-items-center">
                                <div className="form-input w-100 mt-2">
                                    <label>Email :</label>
                                    <input className='w-100 rounded-3 p-2'
                                        type="email"
                                        placeholder="Email Address"
                                        autoComplete="off"
                                        value={email}
                                        onChange={handleChangeEmail} />
                                    <span className="emaillError text-danger">{emailError}</span>
                                </div>
                                <div className="form-input w-100 my-4">
                                    <label>password :</label>
                                    <input className='w-100 rounded-3 p-2'
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={handleChangePass}
                                         />
                                </div>
                                <div className="form_button shadow-sm rounded-3 w-50">
                                    <button type="submit" className="btn btn-block border-0 w-100 px-4 py-2 d-flex justify-content-center align-items-center"
                                    onClick={handleSubmit}>
                                        Login
                                    </button>
                                </div>
                                {/* <div className="form_link text-right mt-4">
                                    <Link to="/Register" className="forget-link">Forgot password?</Link>
                                </div> */}
                                <div className="form_link text-right mt-3 d-flex">
                                    <p>
                                        Don't have an account?</p>
                                    <Link to="/Sign_Up" className="ms-2">Sign Up</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </Fragment>
    );
}

export default Login;