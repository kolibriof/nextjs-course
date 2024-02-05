import axios from "axios";
import Link from "next/link";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b";

const DrinksPage = async () => {
	const resp = await axios(url);
	console.log(resp.data);

	return (
		<div>
			<h1 className='text-7xl'>Drinks Page</h1>
		</div>
	);
};

export default DrinksPage;
