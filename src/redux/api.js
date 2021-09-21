import axios from 'axios';
const YOUR_APP_KEY = "7cb2504bb1d3d2a1a00a4ae444669225";
const YOUR_APP_ID    = "1b46e6e9";

export const getRecipe = async(query) =>{
	const url =`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
	return await axios.get(url);
}