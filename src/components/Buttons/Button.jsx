import React from 'react';

export const Button = (props) => (
        <button type="button" className={props.className} onClick={props.onClick} value={props.value}>
            {props.text} {props.children}
        </button>
);
