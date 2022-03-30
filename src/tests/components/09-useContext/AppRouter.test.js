import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en AppRouter.test.js', () => {

    const user = {
        id: 1,
        name: 'Sebastián',
    };

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter /> 
        </UserContext.Provider>
    );

    test('debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

});