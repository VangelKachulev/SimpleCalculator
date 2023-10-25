import { useState } from "react";
import './Calculator.css'

export function Calculator() {
    const [result, setResult] = useState('0');

    const handle = (value) => {
        if (value === '=') {
            try {
                setResult(eval(result));
            } catch (error) {

            }
        } else if (value === 'C') {
            setResult('');
        } else if (value === '0') {
            if (result == 0) {
                setResult('0');
            } else {
                setResult(result + value);
            }
        } else {
            setResult(result + value);
        }
    };

    return (
        <div className="main-background">
            <div className="phone">
                <div>
                    <input className="input" type="text" value={result} />
                </div>
                <div className="buttons">


                    <div className="first-row">
                        <button onClick={() => handle('7')}>7</button>
                        <button onClick={() => handle('8')}>8</button>
                        <button onClick={() => handle('9')}>9</button>
                        <button onClick={() => handle('*')}>*</button>
                    </div>
                    <div>
                        <button onClick={() => handle('4')}>4</button>
                        <button onClick={() => handle('5')}>5</button>
                        <button onClick={() => handle('6')}>6</button>
                        <button onClick={() => handle('/')}>/</button>

                    </div>
                    <div>
                        <button onClick={() => handle('1')}>1</button>
                        <button onClick={() => handle('2')}>2</button>
                        <button onClick={() => handle('3')}>3</button>
                        <button onClick={() => handle('+')}>+</button>

                    </div>
                    <div>
                        <button className="button c" onClick={() => handle('C')}>C</button>
                        <button onClick={() => handle('0')}>0</button>
                        <button onClick={() => handle('=')}>=</button>
                        <button onClick={() => handle('-')}>-</button>
                    </div>
                </div>

            </div>

        </div>
    );
};