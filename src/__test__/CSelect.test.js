import React from 'react';

import { mount, configure } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import CSelect from '../components/CSelect';

configure({ adapter: new Adapter() })

describe('CSelect components', () => {

    it('Testing component properties', () => {
        const sexs = [
            { value: 'MALE', description: 'MALE' },
            { value: 'FEMALE', description: 'FEMALE' }
        ]
        const component = mount(
            <CSelect
                onChange={() => jest.fn()}
                placeholder="Select a gender"
                options={sexs}
            />
        )

        expect(component.props().placeholder).toEqual("Select a gender")
        expect(component.props().options).toEqual(sexs)

        component.unmount()
    })
});
