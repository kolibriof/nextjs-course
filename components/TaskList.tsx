import React from "react";
import DeleteForm from "./DeleteForm";
import Link from "next/link";
import { getAllTasks } from "@/utils/actions";

const TaskList = async () => {
	const tasks = await getAllTasks();
	if (tasks.length === 0) {
		return <h2 className='mt-8 font-medium text-lg'>No tasks to show.</h2>;
	}
	return (
		<ul className='menu menu-md bg-base-200 rounded-box w-full'>
			{tasks.map((task) => {
				return (
					<div
						className='flex flex-row items-center uppercase p-3'
						key={task.id}>
						<li
							className={`text-white font-semibold shadow-inner w-1/2 ${
								task.completed && `line-through`
							}`}>
							{task.content}
						</li>
						<div className='flex flex-row gap-2 justify-end w-1/2'>
							<Link
								href={`/tasks/${task.id}`}
								className='uppercase bg-green-600 text-white p-2 rounded-lg cursor-pointer font-semibold'>
								EDIT
							</Link>
							<DeleteForm id={task.id} />
						</div>
					</div>
				);
			})}
		</ul>
	);
};

export default TaskList;
