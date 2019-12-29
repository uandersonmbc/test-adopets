import React from 'react';
import Moment from 'react-moment';
import { Tag, Icon, Avatar } from 'antd';

/**
 * Component CSelect
 */
export const sexs = [
    { value: 'MALE', description: 'MALE' },
    { value: 'FEMALE', description: 'FEMALE' }
]

export const sizes = [
    { value: 'S', description: 'Small' },
    { value: 'M', description: 'Medium' },
    { value: 'L', description: 'Large' },
    { value: 'XL', description: 'Extra Large' }
]

export const ages = [
    { value: 'BABY', description: 'BABY' },
    { value: 'YOUNG', description: 'YOUNG' },
    { value: 'ADULT', description: 'ADULT' },
    { value: 'SENIOR', description: 'SENIOR' }
]

export const fields = [
    { value: 'name', description: 'Name' },
    { value: 'price', description: 'Price' },
    { value: 'size_key', description: 'Size' },
    { value: 'sex_key', description: 'Sex' },
    { value: 'created_date', description: 'Creation date' },
    { value: 'age_key', description: 'Age' }
]

/**
 * Component Popover
 */
export const content = (
    <div>
        <p><Icon type='arrow-down' /> ASC</p>
        <p><Icon type='arrow-up' /> DESC</p>
    </div>
);

/**
 * Component Table
 */
export const columns = [
    {
        title: 'Avatar',
        dataIndex: 'name',
        key: 'avatar',
        render: (name: string) => {
            let partition = name.split(' ');
            let total = partition.length
            let initials = (total > 1) ? partition[0][0] + partition[total - 1][0] : partition[0][0]
            return (<Avatar style={{ background: '#ce3f71' }}>{initials}</Avatar>)
        }
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Specie',
        dataIndex: 'specie',
        key: 'specie',
        render: (specie: any) => {
            var cor = [
                { specie: 'Dog', cor: 'magenta' },
                { specie: 'Cat', cor: 'cyan' },
            ];
            var existe = cor.filter(c => c.specie === specie.name);
            return (
                <span>
                    <Tag color={existe[0].cor}>{specie.name}</Tag>
                </span>
            )
        }
    },
    {
        title: 'Age',
        dataIndex: 'age_key',
        key: 'age_key',
        render: (age: any) => {
            var cor = [
                { age: 'YOUNG', cor: 'magenta' },
                { age: 'SENIOR', cor: 'cyan' },
                { age: 'ADULT', cor: 'volcano' },
                { age: 'BABY', cor: 'geekblue' }
            ];
            var existe = cor.filter(c => c.age === age);
            return (
                <span>
                    <Tag color={existe[0].cor}>{age}</Tag>
                </span>
            )
        },
    },
    {
        title: 'Size',
        dataIndex: 'size_key',
        key: 'size_key',
        render: (tag: any) => {
            var cor = [
                { tag: 'XS', cor: 'magenta' },
                { tag: 'XL', cor: 'cyan' },
                { tag: 'S', cor: 'volcano' },
                { tag: 'L', cor: 'geekblue' },
                { tag: 'M', cor: 'green' }
            ];
            var existe = cor.filter(c => c.tag === tag);
            return (
                <span>
                    <Tag color={existe[0].cor}>{tag}</Tag>
                </span>
            )
        },
    },
    {
        title: 'Sex',
        dataIndex: 'sex_key',
        key: 'sex_key',
        render: (tag: any) => {
            return (
                <span>
                    <Tag color={(tag === 'MALE') ? 'cyan' : 'magenta'}>{tag}</Tag>
                </span>
            )
        },
    },
    {
        title: 'Creation date',
        dataIndex: 'created_date',
        key: 'created_date',
        render: (created_at: string) => (
            <Moment format="DD/MM/YYYY hh:mm:ss">
                {created_at}
            </Moment>
        )
    },
];
