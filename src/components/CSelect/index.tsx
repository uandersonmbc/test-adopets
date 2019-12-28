import React from 'react';

import { Select } from 'antd';

import './style.css';

const { Option } = Select;

interface Option {
    value: string;
    description: string
}

interface Props {
    onChange?: (value: string) => any;
    options?: Option[];
    placeholder?: string;
}

class CSelect extends React.Component<Props> {
    render() {
        return (
            <Select
                showSearch
                className="select"
                placeholder={this.props.placeholder ? this.props.placeholder : 'Select a item'}
                optionFilterProp="children"
                onChange={this.props.onChange}
            >
                {this.props.options ? this.props.options.map(option => {
                    return (<Option value={option.value}>{option.description}</Option>)
                }) : ''}
            </Select>
        );
    }
}

export default CSelect;
