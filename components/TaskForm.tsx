import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { createTask } from "@/utils/actions";

const TaskForm = () => {
	return (
		<form action={createTask}>
			<div className='join w-full'>
				<input
					type='text'
					className='input input-bordered join-item w-full'
					placeholder='New task here..'
					name='content'
					required
				/>
				<button className='btn btn-primary join-item' type='submit'>
					CREATE TASK
				</button>
			</div>
		</form>
	);
};

export default TaskForm;
