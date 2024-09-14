import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import '../../../styles/auth.css';
import logo from '../../../assets/MoodMapLogo.png';
import {registerUser} from '../../../service/auth.js';
import * as constant from '../../../constants/constants.js';
import {customToastMsg} from '../../../utils/CommonFun.jsx';
import {validateEmail} from '../../../utils/validation.js';
import {useNavigate} from "react-router-dom";

function Register() {
    const navigate =useNavigate()

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        if (username === '') {
            customToastMsg('Username cannot be empty', 0);
        } else if (email === '') {
            customToastMsg('Email cannot be empty', 0);
        } else if (!validateEmail(email)) {
            customToastMsg('Please enter a valid email', 0);
        } else if (password === '') {
            customToastMsg('Password cannot be empty', 0);
        } else if (password !== confirmPassword) {
            customToastMsg('Passwords do not match', 0);
        } else {

            let data = {
                "username": username,
                "email": email,
                "password": password
            };

            registerUser(data).then((res) => {
                customToastMsg('Registration successful! Please login.', 1);
                //window.location.href = '/login';  // Redirect to login
                navigate('/login')
            }).catch((err) => {
                customToastMsg('Registration failed. Please try again.', 0);
            });
        }
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
                            <span className="title-moodmap">Join the Emotional Journey</span>
                            <hr/>
                            <h3>Welcome!</h3>
                            <p className="text-muted">Create an account to start exploring.</p>

                            <Form onSubmit={handleSubmit} className="p-2 mt-4 login-from">
                                <FormGroup>
                                    <Label for="username">Username</Label>
                                    <Input type="text" name="username" id="username" placeholder="Enter your username"
                                           value={username} onChange={e => setUsername(e.target.value)}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" id="email" placeholder="Enter your email"
                                           value={email} onChange={e => setEmail(e.target.value)}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password-input">Password</Label>
                                    <Input type="password" name="password" id="password-input"
                                           placeholder="Enter password" value={password}
                                           onChange={e => setPassword(e.target.value)}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="confirm-password-input">Confirm Password</Label>
                                    <Input type="password" name="confirmPassword" id="confirm-password-input"
                                           placeholder="Confirm password" value={confirmPassword}
                                           onChange={e => setConfirmPassword(e.target.value)}/>
                                </FormGroup>

                                <Button className="signin-btn mb-3" type="submit" block>Sign Up</Button>

                                <p className="text-center">Already have an account? <a className="text-purple"
                                                                                       href="/login">Sign In</a></p>
                            </Form>

                            <div className="footer">
                                <p className="mb-0 text-center text-muted">&copy; 2024 Moodmap
                                    Developed by <span className="text-primary">DILANJANA VIMUKTHI</span></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Register;
