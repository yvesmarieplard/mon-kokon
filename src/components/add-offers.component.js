import React, { Component } from "react";
import OffersDataService from "../services/offers.service";

export default class AddOffer extends Component {
  constructor(props) {
    super(props);
    this.onChangeSuburb = this.onChangeSuburb.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeRooms= this.onChangeRooms.bind(this);
    this.onChangeType= this.onChangeType.bind(this);
    this.onChangePrice= this.onChangePrice.bind(this);
    this.onChangeMethod= this.onChangeMethod.bind(this);
    this.onChangeSellerG= this.onChangeSellerG.bind(this);
    this.onChangeDate= this.onChangeDate.bind(this);
    this.onChangeDistance= this.onChangeDistance.bind(this);
    this.onChangePostcode= this.onChangePostcode.bind(this);
    this.onChangeBedroom= this.onChangeBedroom.bind(this);
    this.onChangeBathroom= this.onChangeBathroom.bind(this);
    this.onChangeCar= this.onChangeCar.bind(this);
    this.onChangeLandsize= this.onChangeLandsize.bind(this);
    this.onChangeBuildingArea= this.onChangeBuildingArea.bind(this);
    this.onChangeYearBuilt= this.onChangeYearBuilt.bind(this);
    this.onChangeCouncilArea= this.onChangeCouncilArea.bind(this);
    this.onChangeLattitude= this.onChangeLattitude.bind(this);
    this.onChangeLongtitude= this.onChangeLongtitude.bind(this);
    this.onChangeRegionname= this.onChangeRegionname.bind(this);
    this.onChangePropertycount= this.onChangePropertycount.bind(this);
    this.saveOffer = this.saveOffer.bind(this);
    this.newOffer = this.newOffer.bind(this);

    this.state = {
      id: null,
      suburb: "",
      description: "",
      rooms: "",
      type: "",
      price: "",
      method: "",
      sellerG: "",
      date: "",
      distance: "",
      postcode: "",
      bedroom: "",
      bathroom: "",
      car: "",
      landsize: "",
      buildingArea: "",
      yearBuilt: "",
      councilArea: "",
      lattitude: "",
      longtitude: "",
      regionname: "",
      propertycount: "",

      published: false,

      submitted: false
    };
  }

  onChangeSuburb(e) {
    this.setState({
      suburb: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeRooms(e) {
    this.setState({
      rooms: e.target.value
    });
  }
  onChangeType(e) {
    this.setState({
      type: e.target.value
    });
  }
  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }
  onChangeMethod(e) {
    this.setState({
      method: e.target.value
    });
  }
  onChangeSellerG(e) {
    this.setState({
      sellerG: e.target.value
    });
  }
  onChangeDate(e) {
    this.setState({
      date: e.target.value
    });
  }
  onChangeDistance(e) {
    this.setState({
      distance: e.target.value
    });
  }
  onChangePostcode(e) {
    this.setState({
      postcode: e.target.value
    });
  }
  onChangeBedroom(e) {
    this.setState({
      bedroom: e.target.value
    });
  }
  onChangeBathroom(e) {
    this.setState({
      bathroom: e.target.value
    });
  }
  onChangeCar(e) {
    this.setState({
      car: e.target.value
    });
  }
  onChangeLandsize(e) {
    this.setState({
      landsize: e.target.value
    });
  }
  onChangeBuildingArea(e) {
    this.setState({
      buildingArea: e.target.value
    });
  }
  onChangeYearBuilt(e) {
    this.setState({
      yearBuilt: e.target.value
    });
  }
  onChangeCouncilArea(e) {
    this.setState({
      councilArea: e.target.value
    });
  }
  onChangeLattitude(e) {
    this.setState({
      lattitude: e.target.value
    });
  }
  onChangeLongtitude(e) {
    this.setState({
      longitude: e.target.value
    });
  }
  onChangeRegionname(e) {
    this.setState({
      regionname: e.target.value
    });
  }
  onChangePropertycount(e) {
    this.setState({
      propertycount: e.target.value
    });
  }

  saveOffer() {
    var data = {
      suburb: this.state.suburb,
      description: this.state.description,
      rooms: this.state.rooms,
      type: this.state.type,
      price: this.state.price,
      method: this.state.method,
      sellerG: this.state.sellerG,
      date: this.state.date,
      distance: this.state.distance,
      postcode: this.state.postcode,
      bedroom: this.state.bedroom,
      bathroom: this.state.bathroom,
      car: this.state.car,
      landsize: this.state.landsize,
      buildingArea: this.state.buildingArea,
      yearBuilt: this.state.yearBuilt,
      councilArea: this.state.councilArea,
      lattitude: this.state.lattitude,
      longtitude: this.state.longtitude,
      regionname: this.state.regionname,
      propertycount: this.state.propertycount

    };

    OffersDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          suburb: response.data.suburb,
          description: response.data.description,
          rooms: response.data.rooms,
          type: response.data.type,
          price: response.data.price,
          method: response.data.method,
          sellerG: response.data.sellerG,
          date: response.data.date,
          distance: response.data.distance,
          postcode: response.data.postcode,
          bedroom: response.data.bedroom,
          bathroom: response.data.bathroom,
          car: response.data.car,
          landsize: response.data.landsize,
          buildingArea: response.data.buildingArea,
          yearBuilt: response.data.yearBuilt,
          councilArea: response.data.councilArea,
          lattitude: response.data.lattitude,
          longtitude: response.data.longtitude,
          regionname: response.data.regionname,
          propertycount: response.data.propertycount,

          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newOffer() {
    this.setState({
      id: null,
      suburb: "",
      description: "",
      rooms: "",
      type: "",
      price: "",
      method: "",
      sellerG: "",
      date: "",
      distance: "",
      postcode: "",
      bedroom: "",
      bathroom: "",
      car: "",
      landsize: "",
      buildingArea: "",
      yearBuilt: "",
      councilArea: "",
      lattitude: "",
      longtitude: "",
      regionname: "",
      propertycount: "",

      published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newOffer}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="suburb">suburb</label>
              <input
                type="text"
                className="form-control"
                id="suburb"
                required
                value={this.state.suburb}
                onChange={this.onChangeSuburb}
                name="suburb"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>


            <div className="form-group">
              <label htmlFor="rooms">Rooms</label>
              <input
                type="text"
                className="form-control"
                id="rooms"
                required
                value={this.state.rooms}
                onChange={this.onChangeRooms}
                name="rooms"
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <input
                type="text"
                className="form-control"
                id="type"
                required
                value={this.state.type}
                onChange={this.onChangeType}
                name="type"
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                required
                value={this.state.price}
                onChange={this.onChangePrice}
                name="price"
              />
            </div>
            <div className="form-group">
              <label htmlFor="method">Method</label>
              <input
                type="text"
                className="form-control"
                id="method"
                required
                value={this.state.method}
                onChange={this.onChangeMethod}
                name="method"
              />
            </div>
            <div className="form-group">
              <label htmlFor="sellerG">SellerG</label>
              <input
                type="text"
                className="form-control"
                id="sellerG"
                required
                value={this.state.sellerG}
                onChange={this.onChangeSellerG}
                name="sellerG"
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="text"
                className="form-control"
                id="date"
                required
                value={this.state.date}
                onChange={this.onChangeDate}
                name="date"
              />
            </div>
            <div className="form-group">
              <label htmlFor="distance">Distance</label>
              <input
                type="text"
                className="form-control"
                id="distance"
                required
                value={this.state.distance}
                onChange={this.onChangeDistance}
                name="distance"
              />
            </div>
            <div className="form-group">
              <label htmlFor="postcode">Postcode</label>
              <input
                type="text"
                className="form-control"
                id="postcode"
                required
                value={this.state.postcode}
                onChange={this.onChangePostcode}
                name="postcode"
              />
            </div>
            <div className="form-group">
              <label htmlFor="bedroom">Bedroom</label>
              <input
                type="text"
                className="form-control"
                id="bedroom"
                required
                value={this.state.bedroom}
                onChange={this.onChangeBedroom}
                name="bedroom"
              />
            </div>
            <div className="form-group">
              <label htmlFor="bathroom">Bathroom</label>
              <input
                type="text"
                className="form-control"
                id="bathroom"
                required
                value={this.state.bathroom}
                onChange={this.onChangeBathroom}
                name="bathroom"
              />
            </div>
            <div className="form-group">
              <label htmlFor="car">Car</label>
              <input
                type="text"
                className="form-control"
                id="car"
                required
                value={this.state.car}
                onChange={this.onChangeCar}
                name="car"
              />
            </div>
            <div className="form-group">
              <label htmlFor="landsize">Landsize</label>
              <input
                type="text"
                className="form-control"
                id="landsize"
                required
                value={this.state.landsize}
                onChange={this.onChangeLandsize}
                name="landsize"
              />
            </div>
            <div className="form-group">
              <label htmlFor="buildingArea">BuildingArea</label>
              <input
                type="text"
                className="form-control"
                id="buildingArea"
                required
                value={this.state.buildingArea}
                onChange={this.onChangeBuildingArea}
                name="buildingArea"
              />
            </div>
            <div className="form-group">
              <label htmlFor="yearBuilt">YearBuilt</label>
              <input
                type="text"
                className="form-control"
                id="yearBuilt"
                required
                value={this.state.yearBuilt}
                onChange={this.onChangeYearBuilt}
                name="yearBuilt"
              />
            </div>
            <div className="form-group">
              <label htmlFor="councilArea">CouncilArea</label>
              <input
                type="text"
                className="form-control"
                id="councilArea"
                required
                value={this.state.councilArea}
                onChange={this.onChangeCouncilArea}
                name="councilArea"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lattitude">Lattitude</label>
              <input
                type="text"
                className="form-control"
                id="lattitude"
                required
                value={this.state.lattitude}
                onChange={this.onChangeLattitude}
                name="lattitude"
              />
            </div>
            <div className="form-group">
              <label htmlFor="longtitude">Longtitude</label>
              <input
                type="text"
                className="form-control"
                id="longtitude"
                required
                value={this.state.longtitude}
                onChange={this.onChangeLongtitude}
                name="longtitude"
              />
            </div>
            <div className="form-group">
              <label htmlFor="regionname">Regionname</label>
              <input
                type="text"
                className="form-control"
                id="regionname"
                required
                value={this.state.regionname}
                onChange={this.onChangeRegionname}
                name="regionname"
              />
            </div>
            <div className="form-group">
              <label htmlFor="propertycount">Propertycount</label>
              <input
                type="text"
                className="form-control"
                id="propertycount"
                required
                value={this.state.propertycount}
                onChange={this.onChangePropertycount}
                name="propertycount"
              />
            </div>

            <button onClick={this.saveOffer} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
