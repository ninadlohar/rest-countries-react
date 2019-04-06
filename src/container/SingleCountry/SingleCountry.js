import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class SingleCountry extends React.Component {
  state = {
    countryDetails: null,
    name: "",
    languages: [],
    currencies: []
  };
  componentDidMount() {
    axios
      .get(
        `https://restcountries.eu/rest/v2/name/${
          this.props.match.params.country
        }?fullText=true`
      )
      .then(response => {
        this.setState({
          countryDetails: response.data[0],
          name: response.data[0].name,
          languages: response.data[0].languages,
          currencies: response.data[0].currencies
        });
        console.log(this.state.currencies);
      });
  }
  componentWillUnmount() {
    this.setState({
      countryDetails: null,
      name: null,
      languages: null,
      currencies: null
    });
  }
  render() {
    let lang = this.state.languages.map((k, i) => {
      return (
        <span key={k.iso639_1}>
          <Link key={k.iso639_1} to={"/country/countryBy/" + k.iso639_1}>
            {k.name}
          </Link>
        </span>
      );
    });
    let currency = this.state.currencies.map((k, i) => {
      return (
        <span key={k.code}>
          <Link key={k.code} to={"/country/countryBy/" + k.code}>
            {k.name}
          </Link>
        </span>
      );
    });
    return (
      <div>
        <h1>{this.state.name}</h1>
        <span>Languages:</span>
        <div>{lang}</div>
        <span>Currency:</span>
        <div>{currency}</div>
      </div>
    );
  }
}
export default SingleCountry;
