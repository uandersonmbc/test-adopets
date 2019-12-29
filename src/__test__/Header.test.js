import React from 'react';

import { mount, configure } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'


import Header from './../components/Header';

configure({ adapter: new Adapter() })

describe('Header components', () => {

    it('Testing component properties', () => {
        const component = mount(
            <Header
                email="uandersonmbc@gmail.com"
                name="Uanderson Nunes de Lima"
                avatar=""
                action={() => jest.fn()}
            />
        )

        expect(component.props().email).toEqual("uandersonmbc@gmail.com")
        expect(component.props().name).toEqual("Uanderson Nunes de Lima")
        expect(component.props().avatar).toEqual("")

        component.unmount()
    })
});
