import React from 'react';

import { Avatar, Icon, Popconfirm } from 'antd';

import './style.css';

interface Props {
    name?: string;
    email?: string;
    avatar?: string | null;
    action?: any;
}

class Header extends React.Component<Props> {
    render() {
        return (
            <div className="header">
                <Avatar className="avatar" src={`${this.props.avatar}`} size="large">FC</Avatar>
                <div className="info">
                    <h3>{this.props.name}</h3>
                    <span>{this.props.email}</span>
                </div>
                <div className="logout">
                    <Popconfirm
                        title="Are you sure？"
                        onConfirm={this.props.action}
                        icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                    >
                        <Icon type="logout" />
                    </Popconfirm>
                </div>
            </div>
        );
    }
}

export default Header;
