import React, { FunctionComponent } from 'react';
import './Wrapper.scss';

const Wrapper: FunctionComponent = ({children}) => (
    <div className="wrapper">
        {children}
    </div>
);

export default Wrapper;