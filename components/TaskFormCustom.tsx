"use client";

import { createTaskCustom } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const SubmitBtn = () => {
	const { pending } = useFormStatus();
	return (
		<button
			disabled={pending}
			className='btn btn-primary join-item uppercase'
			type='submit'>
			{pending ? "please wait..." : "create task"}
		</button>
	);
};

const initialState = {
	message: null,
};

const TaskFormCustom = () => {
	//@ts-ignore
	const [state, formAction] = useFormState(createTaskCustom, initialState);

	useEffect(() => {
		if (state) {
			if (state.message) {
				if (typeof state.message === "object" && "error" in state.message) {
					toast.error(state.message.error);
					return;
				}
				if (state.message) {
					toast.success("Task created!");
				}
			}
		}
	}, [state]);
	return (
		<form action={formAction}>
			<div className='join w-full'>
				<input
					type='text'
					className='input input-bordered join-item w-full'
					placeholder='New task here..'
					name='content'
					required
				/>
				<SubmitBtn />
			</div>
		</form>
	);
};

export default TaskFormCustom;
