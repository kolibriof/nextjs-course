import DrinksList from "@/components/DrinksList";
import axios from "axios";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b";

export const fetchData = async () => {
	const resp = await axios(url);
	if (resp.status === 404) {
		throw new Error("Failed to fetch data.");
	}
	return resp.data;
};

const DrinksPage = async () => {
	const drinksData = await fetchData();

	return (
		<div className='grid grid-cols-2 gap-4'>
			{drinksData.drinks.map((el: any) => {
				return <DrinksList props={el} key={el.idDrink} />;
			})}
		</div>
	);
};

export default DrinksPage;
