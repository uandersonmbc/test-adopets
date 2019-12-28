import React from 'react';

import { isAuthenticated } from './../services/auth';

interface State {
    access_key: string,
    // status: number,
    // code: number,
    // message: string
}

class Main extends React.Component<any, State> {
    componentDidMount() {
        if (!isAuthenticated()) {
            this.props.history.push('/login');
        }
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Main;
