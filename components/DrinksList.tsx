import Link from "next/link";

const DrinksList = ({ props }: any) => {
	return (
		<Link
			href={`/drinks/${props.idDrink}`}
			className='flex flex-col items-center'>
			<img
				src={props.strDrinkThumb}
				alt={props.strDrink}
				className='rounded-md'
			/>
			<h1 className='text-2xl font-semibold'>{props.strDrink}</h1>
		</Link>
	);
};

export default DrinksList;
