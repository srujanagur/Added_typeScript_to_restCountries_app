import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { BsFillCartCheckFill } from "react-icons/bs";

import { fetchCountries } from "../redux/actions";
import { searchForKeyword } from "../redux/actions";
// import { searchByName } from "../redux/actions";
import { addToCart } from "../redux/actions";


import { Country } from "../types";
import {InitialState} from "../redux/reducers/countryReducer";


export default function CountriesTableReact() {
  const {countries} = useSelector((state:InitialState) => state);
  const {cart} = useSelector((state:InitialState) => state);
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleChange = (evt:React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchForKeyword(evt.target.value));
  };
 
  //  type rootButtonStatus=ReturnType<typeof getbuttonStatus>
  // const getbuttonStatus = (country:Country, cart:Country[]) => {
  //   const matchedCountry = country.name.common;

    // let found = false;
    // return(
    // cart.forEach((a) => (

    //   (a.name.common === matchedCountry)?"true":""
    // )))
    // }
    //   if (a.name.common === matchedCountry) {
    //     found = true;
    //   }
    //   return "true";
    // });

    // if (found === true) {
    //   return "true";
    // } else {
    //   return "";
    // }
  

  return (
    <div>
      <label htmlFor="header-search">
        <h4>Search</h4>
      </label>
      <input
        type="text"
        placeholder="Search for country"
        onChange={handleChange}
      />
{/* <button onClick={() => dispatch(searchByName(country))}>sort</button> */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Population</th>
            <th>Language</th>
            <th>Region</th>
            <th>
              {" "}
              <Link to={"/cart"}>
                <BsFillCartCheckFill size="2.5rem" />
              </Link>
              {Object.keys(cart).length}
            </th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country:Country) => (
            <tr key={country.name.common}>
              <td>
                <img
                  src={country.flags.svg}
                  alt=""
                  width="50px"
                  height="50px"
                />
              </td>
              
              <td>
                <Link to={`/detail/${country.name.common}`}>
                  {country.name.common}
                </Link>
                
              </td>
              <td>{country.population}</td>
              <td>
                <ul>
                  {country.languages ? (
                    Object.entries(country.languages).map(([key]) => (
                      <li key={key}>{country.languages[key]}</li>
                    ))
                  ) : (
                    <li>No Languages</li>
                  )}
                </ul>
              </td>

              <td>{country.region}</td>
              <td>
               
                <Button
                  // disabled={getbuttonStatus(country,cart)}
                  onClick={() => dispatch(addToCart(country))}
                >
                  Add
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
