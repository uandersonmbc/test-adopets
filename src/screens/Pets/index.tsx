import React, { useState } from 'react';

import { Table, Tag, Row, Col } from 'antd';

import { CSelect } from './../../components';

import { Pagination, Pet } from './types';
import { request } from './request';

import './style.css';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age_key',
        key: 'age_key',
    },
    {
        title: 'Size',
        dataIndex: 'size_key',
        key: 'size_key',
    },
    {
        title: 'Sex',
        key: 'sex_key',
        dataIndex: 'sex_key',
        render: (tags: any) => (
            <span>
                <Tag >teste</Tag>
            </span>
        ),
    },
];

function Pets() {

    const [pets, setPets] = useState<Pet[]>([]);
    const [pagination, setPagination] = useState<Pagination>();

    const onChangeSex = (value: string) => {
        alert('Sex' + value)
    }
    const onChangeAge = (value: string) => {
        alert('Age')
    }
    const onChangeSize = (value: string) => {
        alert('Size')
    }

    return (
        <div className="body">
            <div className="agoravai">
                <Row gutter={[24, 24]}>
                    <Col xs={24} lg={8} style={{ paddingTop: 20 }} >
                        <CSelect
                            onChange={onChangeSex}
                            placeholder="Select a gender"
                            options={[
                                { value: 'MALE', description: 'MALE' },
                                { value: 'FEMALE', description: 'FEMALE' }
                            ]}
                        />
                    </Col>
                    <Col xs={24} lg={8} style={{ paddingTop: 20 }} >
                        <CSelect
                            onChange={onChangeSize}
                            placeholder="Select a size"
                            options={[
                                { value: 'S', description: 'Small' },
                                { value: 'M', description: 'Medium' },
                                { value: 'L', description: 'Large' },
                                { value: 'XL', description: 'Extra Large' }
                            ]}
                        />
                    </Col>
                    <Col xs={24} lg={8} style={{ paddingTop: 20 }} >
                        <CSelect
                            onChange={onChangeAge}
                            placeholder="Select an age"
                            options={[
                                { value: 'BABY', description: 'BABY' },
                                { value: 'YOUNG', description: 'YOUNG' },
                                { value: 'ADULT', description: 'ADULT' },
                                { value: 'SENIOR', description: 'SENIOR' }
                            ]}
                        />
                    </Col>
                </Row>
                <div className="responsive">
                    <Table columns={columns} dataSource={pets} />
                </div>
            </div>
        </div >
    );
}

export default Pets;
