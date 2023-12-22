import * as React from 'react';
import {useWatch} from 'react-hook-form';
import './style.css';

let inputRender=0;

function nameWatched({control}) {
    useWatch({
        control,
        name: "lastName"
    });

    inputRender++;

    return (
        <>
            <p>child component render count: {inputRender}</p>
        </>
    )
}

