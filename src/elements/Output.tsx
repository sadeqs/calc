import React, { FunctionComponent } from 'react';
import './Output.scss'

const Output:FunctionComponent = ({children}) => (
    <div className="output">
        {children}
    </div>
)

export default Output;