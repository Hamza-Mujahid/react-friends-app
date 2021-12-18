import React from 'react'
import { Form, Input, Button } from 'antd';
import { } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Link, useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword , onAuthStateChanged , updateProfile} from 'firebase/storage'
import { auth, db , storage } from '../firebase config/Config';
import { useState } from 'react';

const SIgnUpForm = () => {
    const [username , setUserName] = useState('')

   
    return (
        <div>
            <Form className="form-flex">
                <h1>Signup Now!</h1>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            message: 'Please input your name',
                            required: true
                        }
                    ]}
                >
                    <Input type='text' placeholder="Username" />
                </Form.Item>

                <Form.Item
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input placeholder="Please input your E-mail!" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}

                >
                    <Input
                        type='password'
                        placeholder='Please input your password!'

                    />
                </Form.Item>

                <Form.Item
                    name="bio"
                    rules={[{ required: true, message: 'Please input bio' }]}
                >
                    <Input.TextArea
                        showCount maxLength={50}
                        placeholder='Bio...' />
                </Form.Item>

                <Form.Item>
                    <Input

                        className="choose-file"
                        type='file'
                    />
                </Form.Item>

                <Form.Item>
                    <div className='btn-link'>
                        <Button >SIGN UP</Button>
                        <p>OR</p>
                        {/* <Link to='/login'><p>Login</p></Link> */}
                    </div>
                </Form.Item>
            </Form>
        </div >
    )
}

export default SIgnUpForm
