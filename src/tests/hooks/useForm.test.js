import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm.test', () => {

    const initialForm = {
        name: 'Sebastián',
        email: 'seba@gmail.com',
    };

    test('debe de regresar un formulario por defecto', () => {

        const { result } = renderHook( () => useForm( initialForm ) ); 
        const [ values, handleInputChange, reset ] = result.current;
        
        expect( values ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );

    });

    test('debe de cambiar el valor del formulario (name)', () => {

        const { result } = renderHook( () => useForm( initialForm ) );
        const [ , handleInputChange ] = result.current;

        const target = {
            name: 'name',
            value: 'Gonzalo'
        };

        act(() => {

            handleInputChange({target});
        
        });

        const [ values ] = result.current;
        // console.log(values);

        expect( values ).toEqual( {...initialForm, name: 'Gonzalo'} );

    });

    test('debe de re-establecer el formulario con RESET', () => {

        const { result } = renderHook( () => useForm( initialForm ) );
        const [ , handleInputChange, reset ] = result.current;

        const target = {
            name: 'name',
            value: 'Gonzalo'
        };

        act(() => {

            handleInputChange({target});
            reset();
        
        });

        const [ values ] = result.current;
        // console.log(values);

        expect( values ).toEqual( initialForm );

    });

});