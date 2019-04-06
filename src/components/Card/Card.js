import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Card extends React.Component {
  render() {
    let currency = this.props.currencies.map((v, i) => {
      return <span key={v.name}>{v.name}</span>;
    });
    return (
      <div className="card m-auto" style={{ width: "16rem" }}>
        <img
          className="card-img-top"
          src={this.props.flag}
          alt={this.props.name}
          style={{ height: "10rem" }}
        />
        <div className="card-body">
          <h5 className="card-title text-center text-uppercase">
            {this.props.name}
          </h5>
          <p className="card-text main-text mb-0 text-uppercase">Capital</p>
          <p className="card-text font-weight-light subText mb-0">
            {this.props.capital}
          </p>
          <p className="card-text main-text mb-0 text-uppercase">Subregion</p>
          <p className="card-text font-weight-light subText mb-0">
            {this.props.subregion}
          </p>
          <p className="card-text main-text mb-0 text-uppercase">TimeZone</p>
          <p className="card-text font-weight-light subText mb-0">
            {this.props.timezones[0]}
          </p>
          <p className="card-text main-text mb-0 text-uppercase">Currencies</p>
          <p className="card-text font-weight-light subText mb-0">
            <span>{currency}</span>
          </p>
          <Link to={"/country/" + this.props.name}>{this.props.name}</Link>
        </div>
      </div>
    );
  }
}

// https://restcountries.eu/rest/v2/name/aruba?fullText=true

export default withRouter(Card);
