import React from 'react';

import { Select } from 'antd';

const { Option } = Select;
class Pets extends React.Component<any> {

    onChange(value: any) {
        console.log(`selected ${value}`);
    }

    onSearch(val: any) {
        console.log('search:', val);
    }
    render() {
        return (
            <div>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={this.onChange}
                    onSearch={this.onSearch}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
            </div >
        );
    }
}

export default Pets;
