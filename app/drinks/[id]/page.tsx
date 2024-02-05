import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id: number) => {
	const response = await axios.get(`${url}${id}`);
	if (response.status === 404) {
		throw new Error("Unable to fetch the drink.");
	} else {
		return response.data.drinks;
	}
};

const SingleDrinkPage = async ({ params }: any) => {
	const singleDrinkData = await getSingleDrink(params.id);

	return (
		<div className='flex flex-col items-center gap-4'>
			<Link href='/drinks' className='btn btn-secondary'>
				GO BACK
			</Link>

			<Image
				src={singleDrinkData[0].strDrinkThumb}
				alt={singleDrinkData[0].strDrink}
				width={300}
				height={300}
				className='w-48 h-48 rounded-md shadow-xl'
				priority
			/>
			<h2 className='font-semibold '>{singleDrinkData[0].strDrink}</h2>
		</div>
	);
};

export default SingleDrinkPage;
