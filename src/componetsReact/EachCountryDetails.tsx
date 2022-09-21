import React from "react";
import { useParams } from "react-router-dom";
import {  useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


import { InitialState } from "../redux/reducers/countryReducer";

export default function EachCountryDetails() {
  
 
  const {countries} = useSelector((state:InitialState) => state);
  const { name } = useParams();
 
  const eachCountry = countries.filter(
    (country) => country.name.common === name
  );

  return (
    <Card style={{ width: "18rem" }}>
      {eachCountry.map((country) => {
        let languages = [];
        for (var key in country.languages) {
          languages.push(country.languages[key]);
        }
        return (
          <div>
            <Card className="text-center">
              <Card.Header>Country Details</Card.Header>

              <Card.Title>Country Name:{country.name.common}</Card.Title>
              <Card.Text>
                <img
                  className="country-flag"
                  src={country.flags.svg}
                  alt={`Country Flag ${country.name.common}`}
                  style={{ width: "13rem" }}
                />
              </Card.Text>
              <Card.Text> Population: {country.population}</Card.Text>
              <Card.Text> Capital: {country.capital}</Card.Text>
              <Card.Text> Location: {country.region}</Card.Text>
              <Card.Text> Subregion: {country.subregion}</Card.Text>
              <Card.Text> Languages: {languages.join(", ")}</Card.Text>
            </Card>{" "}
            <Button className="btn" variant="info">
              <Link to="/cart">Back to Cart</Link>
            </Button>{" "}
            <Button className="btn" variant="info">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        );
      })}
    </Card>
  );
}
