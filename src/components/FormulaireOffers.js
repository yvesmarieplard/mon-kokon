import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AddOffer from "./add-offers.component";
import Offer from "./offers.component";
import OffersList from "./offers-list.component";
import PropertiesList from "./properties-list.component";

function FormulaireOffers() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/offers" className="navbar-brand">
          Boumar
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/offers"} className="nav-link">
              Offers
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/offers"]} component={PropertiesList} />
          <Route exact path="/add" component={AddOffer} />
          <Route path="/offers/:id" component={Offer} />
        </Switch>
      </div>
    </div>
  );
}

export default FormulaireOffers;
