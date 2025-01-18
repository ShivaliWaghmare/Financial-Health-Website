import React,{useState, useEffect} from 'react';
import {Form, Input, message} from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import "../css/registerpage.css";

const Register = () => {

const navigate = useNavigate();
const [loading, setLoading] = useState(false);

    // Form Submit Function
const submitHandler = async (values) => {
    try {
        setLoading(true)
        await axios.post('/users/register', values);
        message.success('Registeration Successfull');
        setLoading(false);
        navigate('/login');
    } catch (error) {
        setLoading(false)
        message.error('Something went');
    }
};
// Prevent for login user
useEffect(() => {
    if(localStorage.getItem("user")){
        navigate("/");
    }
}, [navigate]);
  return (
    <>
        <div className='register-page'>
          {loading && <Spinner />}
            <Form layout='vertical' onFinish={submitHandler} className='register-form'>
                  <h1 className='register-title'>Register Form</h1>
                <Form.Item className='register-label' label="Name" name="name">
                    <Input className='register-input' autoComplete='given-name' />
                </Form.Item>
                <Form.Item className='register-label' label="Email" name="email">
                    <Input className='register-input' type='email' autoComplete='off' />
                </Form.Item>
                <Form.Item className='register-label' label="Password" name="password">
                    <Input className='register-input' type='password' />
                </Form.Item>
                <div className='d-flex justify-content-between'>
                     <button className='btn btn-primary register-button'>Register</button>
                </div>
                <Link to='/login' className='p-4 signin-link'>Already Register? Click here to Login</Link>
            </Form>
        </div>
   
   
    </>
  )
}

export default Register
