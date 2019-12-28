import React from 'react';

import { Avatar, Icon } from 'antd';

import './style.css';

interface Props {
    name?: string,
    email?: string,
    avatar?: string | null
}

class Header extends React.Component<Props> {
    render() {
        return (
            <div className="header">
                <Avatar className="avatar" src={`${this.props.avatar}`} size="large">UN</Avatar>
                <div className="info">
                    <h3>{this.props.name}</h3>
                    <span>{this.props.email}</span>
                </div>
                <div className="logout">
                    <Icon type="logout" />
                </div>
            </div>
        );
    }
}

export default Header;
