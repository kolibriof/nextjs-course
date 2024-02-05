import Image from "next/image";
import Link from "next/link";

const DrinksList = ({ props }: any) => {
	return (
		<Link
			href={`/drinks/${props.idDrink}`}
			className='flex flex-col items-center'>
			<div className='relative h-48 w-48'>
				<Image
					src={props.strDrinkThumb}
					fill
					alt={props.strDrink}
					sizes='(max-width: 768px) 100vw, (max-width: 1200) 50vw'
					className='rounded-md object-cover'
				/>
			</div>
			<h1 className='text-2xl font-semibold'>{props.strDrink}</h1>
		</Link>
	);
};

export default DrinksList;
