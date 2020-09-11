import React, { useState } from 'react';
import CalculatorView from './view';

const Calculator = () => {
    const operands = ['%', '/', '*', '+', '-', '='];
    const [math, setMath] = useState<string[]>([]);

    //  Calculate the output based on the stack of entered numbers and operands
    const calculate = () => {
        interface Ioperation {
            [key: string]: Function;
        }
        const operation: Ioperation = {
            '*': (n1: number, n2: number) => (n1 * n2),
            '+': (n1: number, n2: number) => (n1 + n2),
            '-': (n1: number, n2: number) => (n1 - n2),
            '/': (n1: number, n2: number) => (n1 / n2),
            '%': (n1: number, n2: number) => (n1 % n2),
        }

        let num1 = '';
        let operand = '';
        let num2 = '';
        for (const item of math) {
            if (operand === '' && operands.includes(item)) {
                operand = item;
                continue;
            }
            if (operand === '') {
                num1 += item;
                continue;
            }
            num2 += item;
        }
        return operation[operand](Number(num1), Number(num2));
    }

    //  Process the keys entered by the user
    const getKey = (key: string) => {
        //  Clear screen
        if (key === 'C') {
            setMath([]);
            return;
        }
        //  Apply positive or negative sign
        if (key === 'neg') {
            if (!operands.includes(math[math.length-1])) {
                const operandPos = -1 + math.length - math
                    .slice()
                    .reverse()
                    .findIndex(el => operands.includes(el));
                switch (math[operandPos]) {
                    case('-'):
                        setMath([
                            ...math.slice(0, operandPos),
                            '+',
                            ...math.slice(operandPos+1)
                        ])
                        break;
                    case('+'):
                        setMath([
                            ...math.slice(0, operandPos),
                            '-',
                            ...math.slice(operandPos+1)
                        ])
                    break;
                    default:
                        setMath([
                            ...math.slice(0, operandPos+1),
                            '-',
                            ...math.slice(operandPos+1)
                        ])

                }
                    
            }
            return;
        }
        //  if the entered key is an operand
        if (operands.includes(key)) {
            //  If you user enters another operand to change the current operand
            if (key !== '=' && operands.includes(math[math.length-1])) {
                setMath([...math.slice(0, math.length-1), key]);
                return;
            }
            //  If users enters another operand or equal sign, the current result should be shown to the user
            if (math.length>1 && math.findIndex(item=>operands.includes(item))>=0) {
                key === '=' ? setMath([calculate()]) : setMath([calculate(), key]);
                return;
            }
            if (key !== '=') {
                setMath([...math, key])
            }
        }
        //  if the entered key is a number
        if (!Number.isNaN(Number(key)) || key === '.') {
            setMath([...math, key]);
            return;
        }
        return;
    }

    return <CalculatorView handleClick={getKey} screen={math} />
}

export default Calculator;