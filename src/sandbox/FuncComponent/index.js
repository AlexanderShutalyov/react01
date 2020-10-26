import React from 'react';

export const FNButton = ({cssName }) => <button className={cssName}>Button with CSS {cssName} </button>

export const FNBlock  = ({ fnTitle, fnBody }) =>
    <div>
        <h1>{fnTitle}</h1>
        <p>{fnBody}</p>
    </div>

// export const FNComponent  = ({ className, cssName }) => <div>I'm a simple Component with {className} property and color {cssName}</div>
