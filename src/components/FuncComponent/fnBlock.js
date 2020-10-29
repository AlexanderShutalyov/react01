import React from 'react';

export const FNBlock  = ({compCss, fnTitle, fnBody }) =>
    <div className={compCss}>
        <h1>{fnTitle}</h1>
        <p>{fnBody}</p>
    </div>