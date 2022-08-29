export const API_URL = 'https://www.themealdb.com/api/json/v1/1/'
export const SEARCH_QUERY='search.php';
export const FILTER_QUERY = 'filter.php';
export const LIST_QUERY = 'list.php';

export async function getData(query){
    try{
        const response = await fetch(API_URL + query);
        console.log('Sucess!!', response);
        const result = await response.json();
        return result;
    }catch(err){
        console.log(err)
    }

}
