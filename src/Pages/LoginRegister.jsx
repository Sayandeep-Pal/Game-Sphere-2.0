import React, { useState } from 'react'
import './LoginRegister.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { auth, db } from '../Components/Firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';

import logo from '../Components/transperantlogo.png'


const LoginRegister = () => {

    const [action, setAction] = useState('');
    const [username, setusername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    const [logEmail, setLogEmail] = useState('');
    const [logPassword, setLogPassword] = useState('');

    const registerLink = () => {
        setAction(' active');
    }

    const loginLink = () => {
        setAction('');
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    Username: username,
                    Email: user.email,
                });
            }
            toast.success("Registration successful !!!", { position: 'top-center' });
            window.location.href = '/mainContent';
        }
        catch (error) {
            toast.error(error.message, { position: 'bottom-center' });
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, logEmail, logPassword);
            toast.success("Log In successful !!!", { position: 'top-center' });
            window.location.href = '/mainContent';
        } catch (error) {
            toast.error(error.message, { position: 'bottom-center' });
        }
    }
    return (
        <>
            <nav class="navbar fixed-top bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
      Game Sphere
    </a>
  </div>
</nav>
            <div className="form-body">
                <div className={`wrapper${action}`}>
                    <div className='form-box login'>
                        <form onSubmit={handleLogin}>
                            <h1>Login</h1>
                            <div className="input-box">
                                <input type='email' placeholder='Enter Email' value={logEmail} onChange={(e) => setLogEmail(e.target.value)} required />
                                <IoIosMail className='icon' />
                            </div>
                            <div className="input-box">
                                <input type='Password' placeholder='Enter Password'
                                    value={logPassword}
                                    onChange={(e) => setLogPassword(e.target.value)} required />
                                <FaLock className='icon' />
                            </div>

                            {/* <div className="remember-forgot">
                                <lable><input type="checkbox" />Remember me</lable>
                                <a href='#'>Forgot password?</a>
                            </div> */}

                            <button type='submit'>Login</button>

                            <div className="register-link">
                                <p>New User?         <a href='#' onClick={registerLink}>Register</a></p>
                            </div>
                        </form>
                    </div>

                    <div className='form-box register'>
                        <form onSubmit={handleRegister}>
                            <h1>Registration</h1>
                            <div className="input-box">
                                <input type='text' placeholder='Enter Username' value={username} onChange={(e) => setusername(e.target.value)} required />
                                <FaUser className='icon' />
                            </div>
                            <div className="input-box">
                                <input type='email' placeholder='Enter Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} required />
                                <IoIosMail className='icon' />
                            </div>
                            <div className="input-box">
                                <input type='Password' placeholder='Enter Password' value={password}
                                    onChange={(e) => setPassword(e.target.value)} required />
                                <FaLock className='icon' />
                            </div>

                            {/* <div className="remember-forgot">
                                <lable><input type="checkbox" />I agree to the terms & conditions</lable>

                            </div> */}

                            <button type='submit'>Register</button>

                            <div className="register-link">
                                <p>Already have an account? <a href='#' onClick={loginLink}>Login</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginRegister
