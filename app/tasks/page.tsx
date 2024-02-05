import Link from "next/link";

const TasksPage = () => {
	return (
		<div>
			<h1 className='text-7xl'>Tasks Page</h1>
			<Link href='/' className='text-2xl'>
				Home Page
			</Link>
		</div>
	);
};

export default TasksPage;
