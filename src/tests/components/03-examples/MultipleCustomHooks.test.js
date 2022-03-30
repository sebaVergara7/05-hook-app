import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter2 } from '../../../hooks/useCounter2';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter2');

describe('Pruebas en MultipleCustomHooks.test.js', () => {

    beforeEach( () =>  {
 
        useCounter2.mockReturnValue({
            counter: 10,
            increment: () => {}
        });
 
    });

    test('debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar la información', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Sebastián',
                quote: 'Hola Mundo',
            }],
            loading: false,
            error: null,
        });

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper.find('.alert').exists() ).toBe(false);
        expect( wrapper.find('.mb-0').text().trim() ).toBe('Hola Mundo');
        expect( wrapper.find('footer').text().trim() ).toBe('Sebastián');
        
        // console.log(wrapper.html());

    });

});