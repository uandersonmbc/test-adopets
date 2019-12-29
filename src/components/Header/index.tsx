import React from 'react';

import { Avatar, Icon, Popconfirm } from 'antd';

import './style.css';

interface Props {
    name: string;
    email: string;
    avatar?: string | null;
    action?: () => any;
}

function Header(props: Props) {
    let partition = props.name.split(' ');
    let total = partition.length
    let initials = (total > 1) ? partition[0][0] + partition[total - 1][0] : partition[0][0]
    return (
        <div className="header">
            <Avatar className="avatar" src={`${props.avatar}`} size="large">{initials}</Avatar>
            <div className="info">
                <h3>{props.name}</h3>
                <span>{props.email}</span>
            </div>
            <div className="logout">
                <Popconfirm
                    title="Are you sure？"
                    onConfirm={props.action}
                    icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                >
                    <Icon type="logout" />
                </Popconfirm>
            </div>
        </div>
    );
}

export default Header;
