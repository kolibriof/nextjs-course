"use client";
import { useState } from "react";

const ClientPage = () => {
	const [counter, setCounter] = useState<number>(0);
	return (
		<div className='flex flex-col items-center gap-3'>
			<div className='text-6xl flex'>{counter}</div>
			<button
				className='btn btn-primary p-3 flex w-1/12'
				onClick={() => setCounter(counter + 1)}>
				Count
			</button>
		</div>
	);
};

export default ClientPage;
