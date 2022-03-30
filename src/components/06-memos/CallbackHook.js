import React, { useCallback, useEffect, useState } from 'react';
import './memo.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

    const increment = useCallback( ( num ) => {
        // setCounter( counter + 1 ); //Así existe una dependencia a count
        setCounter( c => c + num ); //Así no existe una dependencia a count
    }, [ setCounter ]);

    useEffect( () => {
        //???
    }, [ increment ]);


    return (
        <div>
            <h1>CallbackHook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment } />
        </div>
    )
}
