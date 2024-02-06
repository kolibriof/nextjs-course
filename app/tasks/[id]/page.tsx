import { GetSingleTask, editTask } from "@/utils/actions";
import Link from "next/link";

const SingleTaskPage = async ({ params }: any) => {
	const task = await GetSingleTask(params.id);
	if (!task) {
		return <h2 className='text-5xl'>No task to show</h2>;
	}

	return (
		<>
			<Link href='/tasks' className='btn btn-primary btn-lg w-1/12'>
				GO BACK
			</Link>
			<form
				className='max-w-sm bg-base-100 p-12 border border-base-300  rounded-lg'
				action={editTask}>
				<input type='hidden' name='id' value={params.id} />
				<input
					defaultValue={task.content}
					name='content'
					className='input input-bordered w-full'
					required
					type='text'
				/>
				<label className='label cursor-pointer'>
					<span className='label-text'>completed</span>
					<input
						defaultChecked={task.completed}
						name='completed'
						type='checkbox'
						className='checkbox checkbox-primary checkbox-sm'
					/>
				</label>
				<button className='btn btn-primary btn-block btn-sm'>Submit</button>
			</form>
		</>
	);
};

export default SingleTaskPage;
