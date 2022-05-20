import React, { Fragment , useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import validator from 'validator';

const Sign_up = () => {
 
    const [fullName, setfullName] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [emailError, setemailError] = useState('');

    // Email confirmation
    const validEmail = (e) =>{
        var email = e.target.value

        if(validator.isEmail(email)) {
            setemailError('* Valid Email :)')
        } else {
            setemailError('* error please enter valid email !!')
        }
    }
    // post data
    const handleSubmit = (e) =>{
        e.preventDefault();

        const data = {
            fullName: fullName,
            email: email,
            password: password,
        }
        axios.post('https://yasamanproject-8481b-default-rtdb.firebaseio.com/data', data).then( result =>{
            setfullName('');
            setemail('');
            setpassword('');
            alert('Your membership is complete (:');
        }).catch(error =>{
            alert('Your information was not registered. Try again !!')
        });
    }

    // handler changes
    
    const handleChangeEmail = (e) => {
        validEmail(e);
        setemail(e.target.value);
    }
    const handleChangeName = (e) => {
        setfullName(e.target.value);
    }
    const handleChangepass = (e) =>{
        setpassword(e.target.value);
    }

    return (
        <Fragment>
            <div className="container">
                <div className="form_box row justify-content-center align-items-center">
                    <div className="border border-3 col-lg-5 col-md-8 col-sm-10 col-10 form-block p-4">
                        <div className="row justify-content-center align-items-center">
                            <h4 className="form_title text-center mb-4">
                                Sign Up
                            </h4>
                            <form className="col-lg-10 d-flex flex-column justify-content-center align-items-center">
                                <div className="form-input w-100 mt-2">
                                    <label>UserName :</label>
                                    <input className='w-100 rounded-3 p-2'
                                        type="text"
                                        placeholder="Enter your userName"
                                        value={fullName} onChange={handleChangeName}
                                        autoComplete="off" />
                                </div>
                                <div className="form-input w-100 mt-4">
                                    <label>Email :</label>
                                    <input className='w-100 rounded-3 p-2'
                                        type="email"
                                        placeholder="Enter your Email Address"
                                        autoComplete="off"
                                        value={email}
                                        onChange={handleChangeEmail} />
                                    <span className="emaillError text-danger">{emailError}</span>
                                </div>
                                <div className="form-input w-100 my-4">
                                    <label>password :</label>
                                    <input className='w-100 rounded-3 p-2'
                                        type="password"
                                        value={password}
                                        onChange={handleChangepass}
                                        placeholder="Enter your Password" />
                                </div>
                                <div className="form_button shadow-sm rounded-3 w-50">
                                    <button type="submit" onClick={handleSubmit} className="btn btn-block border-0 w-100 px-4 py-2 d-flex justify-content-center align-items-center">
                                    registration
                                    </button>
                                </div>
                                <div className="form_link text-right mt-3 d-flex">
                                    <p>
                                    Already have an account ! </p>
                                    <Link to="/" className="register-link ms-2">Login here</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </Fragment>
    );
}

export default Sign_up;