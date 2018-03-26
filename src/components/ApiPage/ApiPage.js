import React, { Component } from "react";
import axios from "axios";
import { URL } from "./api";

export default class ApiPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true
    };
  }

  componentWillMount() {
    axios
      .get(URL)
      .then(response => {
        //filter the response to show only one per day
        let filteredToDays = [];
        for (let i = 0; i < response.data.list.length; i += 8) {
          filteredToDays.push(response.data.list[i]);
        }
        this.setState({
          data: filteredToDays,
          loading: false,
          city: response.data.city.name,
          country: response.data.city.country
        });
      })
      .catch(error => error);
  }

  render() {
    let loading = this.state.loading;
    let data = this.state.data;
    let city = this.state.city;
    let country = this.state.country;
    let feedback = loading
      ? "Loading weather..."
      : `Weather in ${city}, ${country}`;

    return (
      <div className="container">
        <div className="location">{feedback}</div>
        {data.map((data, index) => {
          let dayDateTime = new Date(data.dt_txt).toString(); //convert date to readable format
          let dayOnly = dayDateTime.substr(0, 3); // remove time and date, just leave day

          let classtype = index === 0 ? "today" : `forecast-${index + 1}`; //define class for today and next 5 days
          return (
            <div className={classtype} key={index}>
              {/*day*/}
              <div className="day">{dayOnly}</div>

              {/*current temp*/}
              <div className="temp">{Math.round(data.main.temp)}&#176;</div>

              {/*icon*/}
              <div>
                <i className={`wi wi-${data.weather[0].icon}`} />
              </div>

              {/*description*/}
              <div className="description">{data.weather[0].description}</div>

              {/*max and min temp*/}
              <div className="details">
                Max: {Math.round(data.main.temp_max)}&#176; | Min:{" "}
                {Math.round(data.main.temp_min)}&#176;
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
