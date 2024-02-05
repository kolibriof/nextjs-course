import Link from "next/link";
const links = [
	{ href: "/client", label: "client" },
	{ href: "/drinks", label: "drinks" },
	{ href: "/tasks", label: "tasks" },
	{ href: "/query", label: "react-query" },
];
const Navbar: React.FC = () => {
	return (
		<nav className='bg-base-300 py-4'>
			<div className='navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row'>
				<li>
					<Link href='/' className='btn btn-primary'>
						Home
					</Link>
				</li>
				<ul className='menu menu-horizontal md:ml-8'>
					{links.map((i) => {
						return (
							<li key={i.href}>
								<Link href={i.href} className='uppercase'>
									{i.label}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
