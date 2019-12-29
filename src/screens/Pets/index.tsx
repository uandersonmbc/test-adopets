import React, { useState, useEffect } from 'react';

import Api from './../../services/api';

import { Table, Row, Col, message, Icon, Popover } from 'antd';

import { CSelect } from './../../components';

import { PetsState } from './types';
import { request } from './request';
import { content, columns } from './complement';

import './style.css';

function Pets() {
    const [pets, setPets] = useState<PetsState>({
        count: 0,
        result: []
    });
    const [sort, setSort] = useState(true);

    const [loading, setLoading] = useState(false)

    const onChangeSex = async (value: string) => {
        Object.assign(request.search, { sex_key: value })
        request.options.page = 1;
        loadingPets()
    }
    const onChangeAge = async (value: string) => {
        Object.assign(request.search, { age_key: value })
        request.options.page = 1;
        loadingPets()
    }
    const onChangeSize = async (value: string) => {
        Object.assign(request.search, { size_key: value })
        request.options.page = 1;
        loadingPets()
    }

    const onChangeSort = async () => {
        let value: string = request.options.sort[0]
        if (value !== undefined) {
            if (value[0] === '-') {
                Object.assign(request.options.sort, [value.replace('-', '')])
            } else {
                Object.assign(request.options.sort, ['-' + value])
            }
            loadingPets()
            setSort(sort ? false : true);
        }
    }

    const onChangeSortField = async (value: string) => {
        Object.assign(request.options.sort, [sort ? value : '-' + value])
        loadingPets()
    }

    const onChangePaginete = async (value: number) => {
        request.options.page = value;
        loadingPets()
    }

    const loadingPets = async () => {
        try {
            setLoading(true);
            const response = await Api.post('/v1/pet/search', request);
            if (response.data.code === 200) {
                setPets(response.data.data)
            } else {
                message.error('there was an error loading pets')
            }
        } catch (error) {
            message.error('there was an error loading pets')
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadingPets()
    }, [])

    return (
        <div className="body">
            <div className="justify">
                <Row gutter={[24, 24]}>
                    <Col xs={24} lg={6} style={{ paddingTop: 20 }} >
                        <CSelect
                            onChange={onChangeSex}
                            placeholder="Select a gender"
                            options={[
                                { value: 'MALE', description: 'MALE' },
                                { value: 'FEMALE', description: 'FEMALE' }
                            ]}
                        />
                    </Col>
                    <Col xs={24} lg={6} style={{ paddingTop: 20 }} >
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
                    <Col xs={24} lg={6} style={{ paddingTop: 20 }} >
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
                    <Col xs={24} lg={6} style={{ paddingTop: 20 }} >
                        <Row gutter={[24, 24]}>
                            <Col span={19} >
                                <CSelect
                                    onChange={onChangeSortField}
                                    placeholder="Select a field rating"
                                    options={[
                                        { value: 'name', description: 'Name' },
                                        { value: 'price', description: 'Price' },
                                        { value: 'size_key', description: 'Size' },
                                        { value: 'sex_key', description: 'Sex' },
                                        { value: 'created_date', description: 'Creation date' },
                                        { value: 'age_key', description: 'Age' }
                                    ]}
                                />
                            </Col>
                            <Col span={5} >
                                <Popover content={content} title="Sort field">
                                    <Icon
                                        className="sort-icon"
                                        type={sort ? 'arrow-down' : 'arrow-up'}
                                        onClick={onChangeSort}
                                    />
                                </Popover>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="responsive">
                    <Table
                        style={{ minWidth: 1000, background: '#fff', padding: 20 }}
                        loading={loading}
                        columns={columns}
                        pagination={
                            {
                                onChange: onChangePaginete,
                                defaultPageSize: request.options.limit,
                                defaultCurrent: request.options.page,
                                total: pets.count
                            }
                        }
                        dataSource={pets.result}
                    />
                </div>
            </div>
        </div >
    );
}

export default Pets;
