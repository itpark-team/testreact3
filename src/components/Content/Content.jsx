import React, {useState} from 'react';
import cl from './Content.module.css';

const Content = () => {
    let [counter, setCounter] = useState(0);


    const incCounter = () => {
        setCounter(++counter);
    }

    return (
        <div>
            <p className={`${cl.backface} ${cl.whitetext}`}>{counter}</p>
            <button onClick={incCounter}>Press me</button>
        </div>
    );
};

export default Content;