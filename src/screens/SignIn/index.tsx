import React from 'react';

import Api from './../../services/api';
import { setUser, setAccessKey, isAuthenticated } from './../../services/auth';

import { Form, Icon, Input, Button, Layout, message } from 'antd';

import './style.css';

interface State {
    access_key: string,
}

class SignIn extends React.Component<any, State> {
    state = {
        access_key: '',
    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields(async (err: any, values: any) => {
            if (!err) {
                const obj = {
                    organization_user: {
                        email: values.email,
                        password: values.password
                    }
                }

                try {

                    const response = await Api.post('/v1/auth/session-register', obj, {
                        headers: { Authorization: "Bearer " + this.state.access_key }
                    });

                    if (response.data.code === 1411 || response.data.code === 1410) {
                        message.warning(response.data.message);
                        return;
                    }
                    const { _formatted, avatar, email, role } = response.data.data.organization_user;
                    setAccessKey(response.data.data.access_key);
                    setUser({
                        full_name: _formatted.full_name,
                        avatar,
                        created_date: _formatted.created_date,
                        email,
                        role
                    })
                    message.success('You have been successfully logged in');

                    this.props.history.push('/')

                } catch (error) {
                    console.log(error)
                }

            }
        });
    };

    async componentDidMount() {
        if (isAuthenticated()) {
            this.props.history.push('/');
        }
        const obj = {
            system_api_key: "505763d6-4202-4b05-9efc-93b366939bcf"
        }

        try {

            const response = await Api.post('/v1/auth/session-request', obj);

            this.setState({
                access_key: response.data.data.access_key
            })

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Layout className='total'>
                <div className="logo">
                    <img src="https://www.adopets.com/static/media/adopets-logo-mobile.e85a313d.svg" className="logo-image" alt="" />
                </div>
                <p className="titulo">Adopets</p>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [
                                { required: true, message: 'Please enter your email' },
                                { type: 'email', message: 'The entry is not a valid email!', }
                            ],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="E-mail"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [
                                { required: true, message: 'Type your password' },
                                { min: 6, message: 'Password with at least 6 characters' }
                            ],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" block className="button">Login</Button>
                    </Form.Item>
                </Form>
            </Layout>
        );
    }
}

const WrappedSignIn = Form.create({ name: 'normal_login' })(SignIn);

export default WrappedSignIn;
