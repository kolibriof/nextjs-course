import Link from "next/link";

const PrismaExamplePage = () => {
	return (
		<div>
			<h1 className='text-7xl'>Prisma Example Page</h1>
			<Link href='/' className='text-2xl'>
				Home Page
			</Link>
		</div>
	);
};

export default PrismaExamplePage;
