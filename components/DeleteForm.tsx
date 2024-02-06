"use client";
import { deleteTask } from "@/utils/actions";
import React, { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

interface DeleteFormProps {
	id: string;
}

const initialState = {
	message: "",
};

const DeleteButton = () => {
	const { pending } = useFormStatus();
	return (
		<button disabled={pending}>{pending ? "Pending..." : "Delete"}</button>
	);
};

const DeleteForm: React.FC<DeleteFormProps> = ({ id }) => {
	const [state, formAction] = useFormState(deleteTask, initialState);

	useEffect(() => {
		if (state.message) {
			if (state.message === "error") {
				toast.error("There was an error.");
				return;
			}
			if (state.message === "success") {
				toast.success(state.message);
			}
		}
	}, [state]);
	return (
		<form
			className='uppercase bg-red-500 p-2 rounded-lg cursor-pointer text-black font-semibold'
			action={formAction}>
			<input type='hidden' name='id' value={id} />
			<DeleteButton />
		</form>
	);
};

export default DeleteForm;
