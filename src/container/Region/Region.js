import React, { Component } from "react";
import "../../App.css";
import axios from "axios";

import Card from "../../components/Card/Card";

class Region extends Component {
  state = {
    countriesList: []
  };
  componentDidMount() {
    axios
      .get(
        `https://restcountries.eu/rest/v2/region/${
          this.props.match.params.region
        }`
      )
      .then(response => {
        this.setState({ countriesList: response.data });
      });
  }
  render() {
    let countriesListArr = this.state.countriesList.map((v, i) => {
      return (
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-3">
          <Card
            name={v.name}
            flag={v.flag}
            capital={v.capital}
            subregion={v.subregion}
            timezones={v.timezones}
            currencies={v.currencies}
            key={v.name}
          />
        </div>
      );
    });
    return <React.Fragment>{countriesListArr}</React.Fragment>;
  }
}

export default Region;
