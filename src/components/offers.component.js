import React, { Component } from "react";
import OffersDataService from "../services/offers.service";

export default class Offer extends Component {
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
    this.getOffer = this.getOffer.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateOffer = this.updateOffer.bind(this);
    this.deleteOffer = this.deleteOffer.bind(this);

    this.state = {
      currentOffer: {
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
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getOffer(this.props.match.params.id);
  }

  onChangeSuburb(e) {
    const suburb = e.target.value;

    this.setState(function(prevState) {
      return {
        currentOffer: {
          ...prevState.currentOffer,
          suburb: suburb
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState(prevState => ({
      currentOffer: {
        ...prevState.currentOffer,
        description: description
      }
    }));
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

  getOffer(id) {
    OffersDataService.get(id)
      .then(response => {
        this.setState({
          currentOffer: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentOffer.id,
      suburb: this.state.currentOffer.suburb,
      description: this.state.currentOffer.description,
      rooms: this.state.currentOffer.rooms,
      type: this.state.currentOffer.type,
      price: this.state.currentOffer.price,
      method: this.state.currentOffer.method,
      sellerG: this.state.currentOffer.sellerG,
      date: this.state.currentOffer.date,
      distance: this.state.currentOffer.distance,
      postcode: this.state.currentOffer.postcode,
      bedroom: this.state.currentOffer.bedroom,
      bathroom: this.state.currentOffer.bathroom,
      car: this.state.currentOffer.car,
      landsize: this.state.currentOffer.landsize,
      buildingArea: this.state.currentOffer.buildingArea,
      yearBuilt: this.state.currentOffer.yearBuilt,
      councilArea: this.state.currentOffer.councilArea,
      lattitude: this.state.currentOffer.lattitude,
      longtitude: this.state.currentOffer.longtitude,
      regionname: this.state.currentOffer.regionname,
      propertycount: this.state.currentOffer.propertycount,    
      published: status
    };

    OffersDataService.update(this.state.currentOffer.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentOffer: {
            ...prevState.currentOffer,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateOffer() {
    OffersDataService.update(
      this.state.currentOffer.id,
      this.state.currentOffer
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The offer was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteOffer() {
    OffersDataService.delete(this.state.currentOffer.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/offers')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentOffer } = this.state;

    return (
      <div>
        {currentOffer ? (
          <div className="edit-form">
            <h4>Offer</h4>
            <form>
              <div className="form-group">
                <label htmlFor="suburb">suburb</label>
                <input
                  type="text"
                  className="form-control"
                  id="suburb"
                  value={currentOffer.suburb}
                  onChange={this.onChangeSuburb}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentOffer.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label htmlFor="rooms">Rooms</label>
                <input
                  type="text"
                  className="form-control"
                  id="rooms"
                  value={currentOffer.rooms}
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
                  value={currentOffer.type}
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
                  value={currentOffer.price}
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
                  value={currentOffer.method}
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
                  value={currentOffer.sellerG}
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
                  value={currentOffer.date}
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
                  value={currentOffer.distance}
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
                  value={currentOffer.postcode}
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
                  value={currentOffer.bedroom}
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
                  value={currentOffer.bathroom}
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
                  value={currentOffer.car}
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
                  value={currentOffer.landsize}
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
                  value={currentOffer.buildingArea}
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
                  value={currentOffer.yearBuilt}
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
                  value={currentOffer.councilArea}
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
                  value={currentOffer.lattitude}
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
                  value={currentOffer.longtitude}
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
                  value={currentOffer.regionname}
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
                  value={currentOffer.propertycount}
                  onChange={this.onChangePropertycount}
                  name="propertycount"
                />
              </div>


              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentOffer.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentOffer.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteOffer}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateOffer}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on an Offer...</p>
          </div>
        )}
      </div>
    );
  }
}
