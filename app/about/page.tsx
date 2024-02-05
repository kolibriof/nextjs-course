import Link from "next/link";

const HomePage = () => {
	return (
		<div>
			<h1 className='text-7xl'>ABOUT PAGE</h1>
			<Link href='/' className='text-2xl'>
				Home Page
			</Link>
		</div>
	);
};

export default HomePage;
