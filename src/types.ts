export const GET_COUNTRIES= "GET_COUNTRIES";
export const ADD_TO_CART= "ADD_TO_CART";
export const SEARCH_KEYWORD= "SEARCH_KEYWORD";
export const DELETE_FROM_CART_LIST="DELETE_FROM_CART_LIST";
export const SEARCH_BY_NAME="SEARCH_BY_NAME";
export const SEARCH_BY_POPULATION="SEARCH_BY_POPULATION";

export type Country={
    name:{common:string};
    flags:{svg:string};
    population:number;
    region:string;
    languages:MyLanguages;
    keyword:string;
    capital:string;
    subregion:string;
    
}
type MyLanguages={
    [key:string]:string;
}
export type GetCountries={
    type: "GET_COUNTRIES" ;
    payload: Country[];
    
};
type AddToCart={
    type:"ADD_TO_CART";
    payload:{
        country:Country;
    }
}
type SortByName={
    type:"SORT_BY_NAME";
    payload: boolean;
    
}
export type SortByPopulation = {
    type: "SORT_BY_POPULATION",
    payload: boolean

}
type SearhForKeyword={
    type: typeof SEARCH_KEYWORD;
    payload: String;
    
}
type DeleteFromCartList={
    type: typeof DELETE_FROM_CART_LIST;
    payload:{
        country:Country;
    }
}
export type CountryActions=GetCountries|AddToCart|SearhForKeyword|DeleteFromCartList|SortByName;