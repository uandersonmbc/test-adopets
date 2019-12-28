import React from 'react';

import { isAuthenticated } from './../services/auth';

import { Layout } from 'antd';

import { Header } from './../components';

interface State {
    access_key: string
}

class Main extends React.Component<any, State> {
    componentDidMount() {
        if (!isAuthenticated()) {
            this.props.history.push('/login');
        }
    }
    render() {
        return (
            <Layout className="layout">
                <Header
                    name="Uanderson Nunes"
                    email="uandersonmbc@gmail.com"
                />
            </Layout>
        );
    }
}

export default Main;
