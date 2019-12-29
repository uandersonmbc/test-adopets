import React from 'react';
import Moment from 'react-moment';
import { Tag, Icon } from 'antd';

export const content = (
    <div>
        <p><Icon type='arrow-down' /> ASC</p>
        <p><Icon type='arrow-up' /> DESC</p>
    </div>
);

export const columns = [
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
        key: 'sex_key',
        dataIndex: 'sex_key',
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
