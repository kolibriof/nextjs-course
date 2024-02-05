import Link from "next/link";

const HomePage = () => {
	return (
		<div className='flex flex-col gap-5'>
			<h1 className='text-7xl font-bold'>Next.js course</h1>
			<Link href='/client' className='btn btn-secondary uppercase w-1/6'>
				Get Started
			</Link>
		</div>
	);
};

export default HomePage;
