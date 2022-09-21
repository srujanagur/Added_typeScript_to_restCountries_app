
import { Dispatch } from "redux";
import { Country } from "../types";
import{GetCountries} from "../types"

export function getCountries(countries:Country[]):GetCountries{
  return {
    type: "GET_COUNTRIES",
    payload: 
      countries,
    
  };
}
export function searchForKeyword(keyword:String) {
  return {
    type: "SEARCH_KEYWORD",
    payload: keyword,
  };
}
export function addToCart(country:Country) {
  return {
    type: "ADD_TO_CART",
    payload: {
      country,
    },
  };
}
// export function sortByName(name:string) {
//   return {
//     type: "SORT_BY_NAME",
//     payload: name
//   };
// }
// export function sortByPopulation(population:number){
//   return {
//     type: "SORT_BY_POPULATION",
//     payload: population
//   };
// }

export function deleteFromCartList(country:Country) {
  return {
    type: "DELETE_FROM_CART_LIST",
    payload: {
      country,
    },
  };
}


export function fetchCountries() {
  return (dispatch:Dispatch) => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => dispatch(getCountries(data)));
  };
}
