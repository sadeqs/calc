import React, { FunctionComponent } from 'react';

import './ButtonCircle.scss';

type ButtonCircleType = {
    type?: 'operand' | 'number' | 'zero' | 'top';
    onClick?: (e: React.MouseEvent) => void;
    children: React.ReactNode;
}

const ButtonCircle: FunctionComponent<ButtonCircleType> = ({type='number', onClick, children}) => (
    <span className={`button button__${type}`} onClick={onClick}>
        <strong>{children}</strong>
    </span>
);

export default ButtonCircle;