import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import '../../../styles/auth.css';
import logo from '../../../assets/MoodMapLogo.png'
import {loginWithEmailAndPassword} from "../../../service/auth.js";
import * as constant from '../../../constants/constants.js'
import {customToastMsg} from "../../../utils/CommonFun.jsx";
import {validateEmail} from "../../../utils/validation.js";
import Cookies from "js-cookie";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [fieldTextType, setFieldTextType] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in with:", {username, password, rememberMe});
        let data = {
            "email": username,
            "password": password
        }

        username === '' ? customToastMsg('Username cannot be empty', 0) :
            password === '' ? customToastMsg('Password cannot be empty', 0) :
                !validateEmail(username) ? customToastMsg('Please check your email again', 0) :
                    loginWithEmailAndPassword(data).then(res => {
                        Cookies.set(constant.ACCESS_TOKEN, res.data.access_token);
                        window.location.href = '/'
                    }).catch(c => {
                        customToastMsg('Your credentials are incorrect,Please try again!', 0)
                    })
    };

    const toggleFieldTextType = () => {
        setFieldTextType(!fieldTextType);
    };

    return (
        <div className="auth-page-wrapper">
            <div className="auth-one-bg-position auth-one-bg">
                <div className="bg-overlay"></div>
            </div>

            <div className="auth-page-content">
                <Row className="justify-content-end">
                    <Col md="8" lg="5" xl="4" className="login-side-page">
                        <div className="login-wrapper">
                            <a href="/" className="d-inline-block auth-logo">
                                <img src={logo} alt="" width="300"/>

                            </a>
                            <br/>
                            <span className="title-moodmap">Discover Your Emotional Compass</span>
                            <hr/>
                            <h3>Welcome back!</h3>
                            <p className="text-muted">Sign in to continue to admin panel.</p>

                            <Form onSubmit={handleSubmit} className="p-2 mt-4 login-from">
                                <FormGroup>
                                    <Label for="username">Email</Label>
                                    <Input type="text" name="username" id="username" placeholder="Enter your email"
                                           value={username} onChange={e => setUsername(e.target.value)}/>
                                </FormGroup>
                                <FormGroup>
                                    <div className="float-end">
                                        <a href="/pass-reset/basic" className="fgt-password-text text-muted">Forgot
                                            password?</a>
                                    </div>
                                    <Label for="password-input">Password</Label>
                                    <div className="position-relative auth-pass-inputgroup">
                                        <Input type={fieldTextType ? "text" : "password"} name="password"
                                               id="password-input"
                                               placeholder="Enter password" value={password}
                                               onChange={e => setPassword(e.target.value)}/>

                                    </div>
                                </FormGroup>

                                <FormGroup check>
                                    <Input type="checkbox" name="remember" id="auth-remember-check"
                                           checked={rememberMe} onChange={e => setRememberMe(e.target.checked)}/>
                                    <Label for="auth-remember-check" check>Remember me</Label>
                                </FormGroup>

                                <Button className='signin-btn' type="submit" block>Sign In</Button>
                            </Form>

                            <div className="footer">
                                <p className="mb-0 text-center text-muted">&copy; 2024 Moodmap
                                    Developed by <span className='text-primary'>DILANJANA VIMUKTHI</span></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Login;
