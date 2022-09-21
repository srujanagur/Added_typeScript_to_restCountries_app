import { Country, CountryActions } from "../../types";

export type InitialState = {
  countries: Country[];
  cart: Country[];
  keyword: String;
  searchForKeyword: Country[];
};

const initialState: InitialState = {
  keyword: "",
  countries: [],
  searchForKeyword: [],
  cart: [],
};
export default function countryReducer(
  state = initialState,
  action: CountryActions
): InitialState {
  switch (action.type) {
    case "GET_COUNTRIES": {
      return {
        ...state,
        countries: action.payload,
        searchForKeyword: action.payload,
      };
    }
    case "SEARCH_KEYWORD": {
      const keyword = action.payload;
      let filteredData = state.countries.filter((country) => {
        return (
          country.name.common.toLowerCase().search(keyword.toLowerCase()) !== -1
        );
      });
      return {
        ...state,
        searchForKeyword: filteredData,
        keyword: keyword,
      };
    }
    case "ADD_TO_CART": {
      const { country } = action.payload;
      return {
        ...state,
        cart: [...state.cart, country],
      };
    }

    case "DELETE_FROM_CART_LIST": {
      const { country } = action.payload;
      return {
        ...state,
        cart: state.cart.filter(function (item) {
          return item !== country;
        }),
      };
    }
    // case "SORT_BY_NAME": {
      
    //   return {
    //     countries: action.payload
    //       ? [...state.countries].sort((a, b) =>
    //           a.name.common > b.name.common ? 1 : -1
    //         )
    //       : [...state.countries]?.sort((a, b) =>
    //           a.name.common < b.name.common ? 1 : -1
    //         ),
        
    //   };
    // }
    // case "SORT_BY_POPULATION":
    //   return {
    //     ...state,
    //     countries: action.payload
    //       ? [...state.countries].sort((a, b) =>
    //           a.population > b.population ? 1 : -1
    //         )
    //       : [...state.countries]?.sort((a, b) =>
    //           a.population < b.population ? 1 : -1
    //         ),
      
    //   };

    default:
      return state;
  }
}
