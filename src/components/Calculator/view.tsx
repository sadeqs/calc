import React, { FunctionComponent } from 'react';
import Output from '../../elements/Output';
import Wrapper from '../../elements/Wrapper';
import ButtonCircle from '../../elements/ButtonCircle';

type CalculatorViewType = {
    screen: string[];
    handleClick: (key: string) => void;
}

const CalculatorView: FunctionComponent<CalculatorViewType> = ({ screen, handleClick }) => (
    <Wrapper>
        <Output>{screen}</Output>
        <ButtonCircle onClick={()=>handleClick('C')} type='top'>C</ButtonCircle>
        <ButtonCircle onClick={()=>handleClick('neg')} type='top'>&#177;</ButtonCircle>
        <ButtonCircle onClick={()=>handleClick('%')} type='top'>%</ButtonCircle>
        <ButtonCircle onClick={()=>handleClick('/')} type='operand'>&divide;</ButtonCircle>
        <ButtonCircle onClick={()=>handleClick('7')}>7</ButtonCircle>
        <ButtonCircle onClick={()=>handleClick('8')}>8</ButtonCircle>
        <ButtonCircle onClick={()=>handleClick('9')}>9</ButtonCircle>
        <ButtonCircle onClick={()=>handleClick('*')} type='operand'>*</ButtonCircle>
        <ButtonCircle onClick={()=>handleClick('4')}>4</ButtonCircle>
        <ButtonCircle onClick={()=>handleClick('5')}>5</ButtonCircle>
        <ButtonCircle onClick={()=>handleClick('6')}>6</ButtonCircle>
        <ButtonCircle onClick={()=>handleClick('-')} type='operand'>-</ButtonCircle>
        <ButtonCircle onClick={()=>handleClick('1')}>1</ButtonCircle>
        <ButtonCircle onClick={()=>handleClick('2')}>2</ButtonCircle>
        <ButtonCircle onClick={()=>handleClick('3')}>3</ButtonCircle>
        <ButtonCircle onClick={()=>handleClick('+')} type='operand'>+</ButtonCircle>
        <ButtonCircle onClick={()=>handleClick('0')} type='zero'>0</ButtonCircle>
        <ButtonCircle onClick={()=>handleClick('.')}>.</ButtonCircle>
        <ButtonCircle onClick={()=>handleClick('=')} type='operand'>=</ButtonCircle>
    </Wrapper>
);

export default CalculatorView;