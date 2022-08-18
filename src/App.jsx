import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.css';
import {
	increment,
	decrement,
	incrementByAmount,
} from './redux/createCounterSlice';

function App() {
	const { count } = useSelector((state) => state.counter);

	const [value, setValue] = useState(0);

	const dispatch = useDispatch();

	const handelIncrement = () => {
		dispatch(increment());
	};
	const handelDecrement = () => {
		dispatch(decrement());
	};
	const handelIncrementByValue = (value) => {
		dispatch(incrementByAmount(value));
	};

	return (
		<div className="App">
			<h2>Hello React</h2>

			<p className={styles.counter}>Output: {count}</p>
			<button className={styles.btn} onClick={handelIncrement}>
				Increment
			</button>
			<button className={styles.btn} onClick={handelDecrement}>
				decrement
			</button>

			<input
				type="text"
				placeholder="Put Number"
				onChange={(e) => setValue(parseInt(e.target.value))}
			/>

			<button
				className={styles.btn}
				onClick={() => handelIncrementByValue(value)}
			>
				ADD
			</button>
		</div>
	);
}

export default App;
