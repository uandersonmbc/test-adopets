import React from 'react';

import { isAuthenticated, logout, getUser } from './../services/auth';

import { Layout } from 'antd';

import { Header } from './../components';

interface State {
    fullname: string;
    email: string;
    avatar: string | null;
}

class Main extends React.Component<any, State> {
    state = {
        fullname: '',
        email: '',
        avatar: null
    }
    componentDidMount() {
        if (!isAuthenticated()) {
            this.props.history.push('/login');
        }

        const json = getUser() + '';
        const user = JSON.parse(json);
        console.log(user)

        this.setState({
            fullname: user.full_name,
            email: user.email,
            avatar: user.avatar,
        })
    }
    handleLogout() {
        logout();
        this.props.history.push('/login');
    }
    render() {
        return (
            <Layout className="layout">
                <Header
                    avatar={this.state.avatar}
                    name={this.state.fullname}
                    email={this.state.email}
                    action={() => this.handleLogout()}
                />
                {this.props.children}
            </Layout>
        );
    }
}

export default Main;
