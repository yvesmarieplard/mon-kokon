import React, { Component } from "react";
import OffersDataService from "../services/offers.service";
import { Link } from "react-router-dom";

const Properties = props => (
    <tr>
        <td>{props.offers.id}</td>
        <td>{props.offers.suburb}</td>
        <td>{props.offers.description}</td>
        <td>{props.offers.rooms}</td>
        <td>{props.offers.type}</td>
        <td>{props.offers.price}</td>
        <td>{props.offers.metdod}</td>
        <td>{props.offers.sellerG}</td>
        <td>{props.offers.date}</td>
        <td>{props.offers.distance}</td>
        <td>{props.offers.postcode}</td>
        <td>{props.offers.bedroom}</td>
        <td>{props.offers.batdroom}</td>
        <td>{props.offers.car}</td>
        <td>{props.offers.landsize}</td>
        <td>{props.offers.buildingArea}</td>
        <td>{props.offers.yearBuilt}</td>
        <td>{props.offers.councilArea}</td>
        <td>{props.offers.lattitude}</td>
        <td>{props.offers.longtitude}</td>
        <td>{props.offers.regionname}</td>
        <td>{props.offers.propertycount}</td>
    </tr>
)

export default class OffersList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchSuburb = this.onChangeSearchSuburb.bind(this);
    this.retrieveOffers = this.retrieveOffers.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveOffer = this.setActiveOffer.bind(this);
    this.removeAllOffers = this.removeAllOffers.bind(this);
    this.searchSuburb = this.searchSuburb.bind(this);

    this.state = {
      offers: [],
      currentOffer: null,
      currentIndex: -1,
      searchSuburb: ""
    };
  }

  componentDidMount() {
    this.retrieveOffers();
  }

  onChangeSearchSuburb(e) {
    const searchSuburb = e.target.value;

    this.setState({
      searchSuburb: searchSuburb
    });
  }

  retrieveOffers() {
    OffersDataService.getAll()
      .then(response => {
        this.setState({
          offers: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveOffers();
    this.setState({
      currentOffer: null,
      currentIndex: -1
    });
  }

  setActiveOffer(offer, index) {
    this.setState({
      currentOffer: offer,
      currentIndex: index
    });
  }

  removeAllOffers() {
    OffersDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchSuburb() {
    this.setState({
      currentOffer: null,
      currentIndex: -1
    });

    OffersDataService.findBySuburb(this.state.searchSuburb)
      .then(response => {
        this.setState({
          offers: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  PropertiesList() {
      return this.state.offers.map(function(a, i){
          return <Properties offers={a} key={i} />;
      })
  }

  render() {
    const { searchSuburb, offers, currentOffer, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by suburb"
              value={searchSuburb}
              onChange={this.onChangeSearchSuburb}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchSuburb}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Offers List</h4>

          <ul className="list-group">
            {offers &&
              offers.map((offer, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveOffer(offer, index)}
                  key={index}
                >
                  {offer.suburb}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllOffers}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentOffer ? (
            <div>
              <h4>Offer</h4>
              <div>
                <label>
                  <strong>suburb:</strong>
                </label>{" "}
                {currentOffer.suburb}
              </div>
              <div>
                <label>
                  <strong>Rooms:</strong>
                </label>{" "}
                {currentOffer.rooms}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentOffer.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/offers/" + currentOffer.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on an Offer...</p>
            </div>
          )}
        </div>

        <h3>Properties List</h3>
        <div>
          <table className="table table-striped" style={{ marginTop: 20 }} >
              <thead>
                  <tr>
                      <th>id</th>
                      <th>suburb</th>
                      <th>description</th>
                      <th>rooms</th>
                      <th>type</th>
                      <th>price</th>
                      <th>method</th>
                      <th>sellerG</th>
                      <th>date</th>
                      <th>distance</th>
                      <th>postcode</th>
                      <th>bedroom</th>
                      <th>bathroom</th>
                      <th>car</th>
                      <th>landsize</th>
                      <th>buildingArea</th>
                      <th>yearBuilt</th>
                      <th>councilArea</th>
                      <th>lattitude</th>
                      <th>longtitude</th>
                      <th>regionname</th>
                      <th>propertycount</th>
                  </tr>
              </thead>
              <tbody>
                        { this.PropertiesList() }
              </tbody>
          </table>
        </div>




      </div>
    );
  }
}
