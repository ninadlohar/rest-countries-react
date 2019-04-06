import React, { Component } from "react";
import "./App.css";
import MainPage from "./container/MainPage/MainPage";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import Region from "./container/Region/Region";
import mainPageReducer from "./store/reducer/mainPageReducer";
import SingleCountry from "./container/SingleCountry/SingleCountry";
import RegionBy from "./container/RegionBy/RegionBy";

const logger = store => {
  return next => {
    return action => {
      console.log("[mw] dispactching", action);
      const result = next(action);
      console.log("[mw] next state", store.getState());
      return result;
    };
  };
};

const rootReducer = combineReducers({
  mainPageReducer: mainPageReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);

class App extends Component {
  render() {
    return (
      <div className="col-12">
        <div className="row">
          <Provider store={store}>
            <BrowserRouter>
              {/** pura page render hoga */}

              <Route path="/region/:region" component={Region} />
              <Route exact path="/country/:country" component={SingleCountry} />
              <Route
                exact
                path="/country/countryBy/:lang"
                component={RegionBy}
              />
              <Route
                exact
                path="/country/countryBy/:curr"
                component={RegionBy}
              />
              <Route exact path="/" component={MainPage} />
            </BrowserRouter>
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
