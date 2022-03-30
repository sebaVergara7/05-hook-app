import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en LoginScreen.test.js', () => {
    
    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen /> 
        </UserContext.Provider>
    );

    test('debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de ejecutar el setUser con el argumento esperado', () => {

        const newUser = {
            id: 123,
            name: 'Sebastián',
        }

        wrapper.find('button').prop('onClick')();

        expect( setUser ).toHaveBeenCalledTimes(1);
        expect( setUser ).toHaveBeenCalledWith(newUser);

    });

});