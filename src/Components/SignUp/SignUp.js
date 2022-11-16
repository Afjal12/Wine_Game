import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import "./SignUp.css"

export const SignUp = () => {
    const url = 'https://jklm2214.herokuapp.com/v1/auth/register/';
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    // const myFunction = (e) => {
    //     console.log(name, email, password);
    //     axios.post(`${url}`, {
    //         name: name,
    //         email: email,
    //         password: password
    //     }).then((res) => {
    //         console.log(res.data)
    //         setEmail("")
    //         setName("")
    //         setPassword("")
    //     }
    //     ).catch((err) => console.log(err));

    // }
    const navigate = useNavigate();
    const myFunction = () => {
        navigate('/')
    }
    return (
        <>
            <div className="container d-flex min-vh-100">
                <div className="d-flex justify-content-center mx-auto my-auto h-100">
                    <div className="user_card">
                        <div className="d-flex justify-content-center">
                            <div className="brand_logo_container">
                                <img src="https://cdn2.hubspot.net/hub/21989998/hubfs/Group%2057%20-%20Copy.png?width=108&height=108" className="brand_logo" alt="Logo" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center form_container">
                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input value={name} type="text" name="" className="form-control input_user" onChange={(e) => setName(e.target.value)} placeholder="Name" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input value={email} type="email" name="" className="form-control input_user" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                </div>

                                <div className="input-group mb-2">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input value={password} type="password" name="" className="form-control input_pass" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                        <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mt-3 login_container">
                                    <button onClick={myFunction} type="button" name="button" className="btn login_btn">Sign Up</button>
                                </div>
                            </form>
                        </div>



                        <div className="mt-4">
                            <div className="d-flex justify-content-center links">
                                Don't have an account? <Link to={'/'} className="ml-2">Sign in</Link>
                            </div>
                            <div className="d-flex justify-content-center links">
                                <Link to={'/forgot'} href="#">Forgot your password?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
