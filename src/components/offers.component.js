import React, { Component } from "react";
import OffersDataService from "../services/offers.service";

export default class Offer extends Component {
  constructor(props) {
    super(props);
    this.onChangeSuburb = this.onChangeSuburb.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getOffer = this.getOffer.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateOffer = this.updateOffer.bind(this);
    this.deleteOffer = this.deleteOffer.bind(this);

    this.state = {
      currentOffer: {
        id: null,
        suburb: "",
        description: "",
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
        this.props.history.push('/tutorials')
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
