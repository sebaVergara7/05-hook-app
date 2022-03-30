import React from 'react';
import { useCounter2 } from '../../hooks/useCounter2';
import { useFetch } from '../../hooks/useFetch';
import './multiple.css';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter2(1);

    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    // console.log(state);
    // console.log(loading);
    // console.log(data);

    const { author, quote } = !!data && data[0];

    // console.log( author, quote );

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            
            {
                loading 
                ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className='blockquote text-right'>
                            <p className='mb-0'> { quote } </p>
                            <footer className='blockquote-footer'> { author } </footer>
                        </blockquote>
                    )
            }

            <button 
                className='btn btn-primary'
                onClick={ increment }
            >
                Siguiente frase
            </button>

        </div>
    )
}
