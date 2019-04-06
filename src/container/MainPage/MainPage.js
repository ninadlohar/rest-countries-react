import React, { Component } from "react";
import "../../App.css";
// import mainPageActions from "../../store/actions/index";
// import { connect } from "react-redux";
// import { connect } from "react-redux";

class MainPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedRegion: "asia",
      countries: ["asia", "europe", "americas", "ocenia", "africa"]
    };
    this.selectedRegionFn = this.selectedRegionFn.bind(this);
    this.searchCountries = this.searchCountries.bind(this);
  }
  componentDidMount() {
    // props.onInitRegions();
    this.setState({ selectedRegion: "asia" });
  }

  selectedRegionFn(e) {
    this.setState({ selectedRegion: e.target.value });
  }
  searchCountries(e) {
    this.setState({ selectedRegion: e.target.value });
    this.props.history.push("/region/" + this.state.selectedRegion);
  }

  render() {
    let selectDrawer = (
      <select
        value={this.state.selectedRegion}
        onChange={this.selectedRegionFn}
      >
        {this.state.countries.map((v, i) => {
          return (
            <option key={v} value={v}>
              {v.toUpperCase()}
            </option>
          );
        })}
      </select>
    );
    return (
      <div>
        <div>{selectDrawer}</div>
        <button onClick={this.searchCountries}>Search Countries</button>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     regions: state.mainPageReducer.countries
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onInitRegions: () => dispatch(mainPageActions.loadRegionsOnInit())
//   };
// };
export default MainPage;
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MainPage);
