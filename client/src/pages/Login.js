import React,{useState, useEffect} from 'react';
import {Form, Input, message} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import "../css/loginpage.css";

const Login = () => {


  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
    

     // Form Submit Function
const submitHandler = async (values) => {
    try {
      setLoading(true);
      const {data} = await axios.post('/users/login', values);
      setLoading(false);
      message.success('Login Successful');
      localStorage.setItem("user", JSON.stringify({ ...data.user, password: ""}));
      navigate('/');
    } catch (error) {
      setLoading(false);
      message.error('Something went wrong');
    }
};
 //prevent for login user
 useEffect(() => {
  if (localStorage.getItem("user")) {
    navigate("/");
  }
}, [navigate]);
  return (
    <> 
       <div className='login-page'>
        {loading && <Spinner />}
            <Form layout='vertical' onFinish={submitHandler} className='login-form'>
                  <h1 className='login-title'>Login Form</h1>
                <Form.Item className='form-label' label="Email address" name="email">
                    <Input className='login-input' type='email' />
                </Form.Item>
                <Form.Item className='form-label' label="Password" name="password">
                    <Input className='login-input' type='password' />
                </Form.Item>
                <div className='d-flex justify-content-between'>
                      <button className='btn btn-primary login-button'>Login</button>
                </div>
                <Link to='/register' className='p-4 signup-link'>Don't have an account? Register/Signup</Link>
            </Form>
        </div>
    </>
  )
}

export default Login;
