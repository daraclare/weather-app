import React, { Component } from "react";
import axios from "axios";
import { URL } from "./api";

console.log("URL", URL);

// function to call the API url
let api = {
  getData() {
    return fetch(URL)
      .then(response => response.json())
      .catch(error => console.warn(error)); //eslint-disable-line
  }
};

export default class ApiPage extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  // componentWillMount() {
  //   // get the api data and set the 'data' state to the response
  //   api.getData().then((response) => {
  //     this.setState({
  //       data: response.targets
  //     });
  //   });
  // }

  componentWillMount() {
    axios
      .get(URL)
      .then(response => {
        let newArr = [];
        for (let i = 0; i < response.data.list.length; i += 8) {
          newArr.push(response.data.list[i]);
        }
        return this.setState({
          data: newArr,
          city: response.data.city.name,
          country: response.data.city.country
        });
      })
      .catch(error => error);
  }

  render() {
    let city = this.state.city;
    let country = this.state.country;

    return (
      <div className="container">
        <div className="location">
          Weather in {city}, {country}
        </div>
        {this.state.data.map((data, index) => {
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
