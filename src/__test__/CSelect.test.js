import React from 'react';

import { mount, configure, shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import CSelect from '../components/CSelect';

configure({ adapter: new Adapter() })

describe('CSelect components', () => {
    let component;
    const sexs = [
        { value: 'MALE', description: 'MALE' },
        { value: 'FEMALE', description: 'FEMALE' }
    ]
    beforeEach(() => {
        const sexs = [
            { value: 'MALE', description: 'MALE' },
            { value: 'FEMALE', description: 'FEMALE' }
        ]
        component = shallow(
            <CSelect
                onChange={() => jest.fn()}
                placeholder="Select a gender"
                options={sexs}
            />
        );
    })

    test('checking the amount of options', () => {
        expect(component.find('Option').length).toBe(2)
        expect(component.props().placeholder).toEqual("Select a gender")
    })
});
