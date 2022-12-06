import React from "react";

export const Button = ( props ) => {
    return (
        <button type="button" className={props.className} onClick={props.onClick} value={props.value}>
            {props.text}
        </button>
    )
};