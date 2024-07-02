
import React, { useState } from "react";
import "./App.css";

const App = () => {
	
	const [counter, setCounter] = useState(0);

	
	const handleClick1 = () => {
		
		setCounter(counter + 1);
	};

	
	const handleClick2 = () => {
		
		setCounter(counter - 1);
	};

	return (
		<div className="container">Counter App
			<div>
				{counter}
			</div>

			<div className="buttons">

				<button className="button1"
					onClick={handleClick1}>
					Increment
				</button>
				<button className="button2"
					onClick={handleClick2}>
					Decrement
				</button>
			</div>

		</div>
	);
};

export default App;
