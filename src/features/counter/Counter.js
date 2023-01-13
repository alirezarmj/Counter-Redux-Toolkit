import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from './counterSlice';

const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <section className="counter text-center">
            <h1 className="count text-center">{count}</h1>
            <div className="buttons">
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div>
                <input
                    type="text"
                    value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                />
            </div>
            <div className="add-reset mt-2">
                <button
                    className="addAmount"
                    onClick={() => dispatch(incrementByAmount(addValue))}
                >Add Amount</button>
                <button
                    className="reset"
                    onClick={resetAll}
                >Reset</button>
            </div>
        </section>
    )
}

export default Counter