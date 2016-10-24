import React from 'react';

class Weather extends React.Component {
  constructor() {
    super();

    this.state = { weather: "" };
  }

  componentDidMount() {
    let success = (pos) => {
      let crd = pos.coords;
      this.loadXMLDoc(crd);
    };

    navigator.geolocation.getCurrentPosition(success);
  }

  render () {
    if (this.state.weather) {
      let { weather } = this.state;
      let city = weather.name;
      let temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content = <div>
                      <h3>{city}</h3>
                      <h3>{temp.toFixed(1)} degrees F</h3>
                    </div>
    }
    else {
      content = <div>
                      <h3><em>Loading Weather</em></h3>
                    </div>
    }

    return (
      <div className="weather">
        {content}
      </div>
    );
  }

  loadXMLDoc(crd) {

    var request = new XMLHttpRequest();
    request.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&APPID=86b7bface7b32edde8bcb37fb7774b4f`, true);

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        const resp = JSON.parse(request.responseText);
        this.setState({ weather: resp });
      } else {
        console.log('Missiles fired but missed the target location!');
      }
    };

    request.onerror = function() {
      console.log("Misfire...");
    };

    request.send();
  }

}


class Clock extends React.Component {
  constructor() {
    super();

    this.updateTime.bind(this);

    let date = new Date();
    this.state = {date: date};
  }

  componentDidMount() {
    this.updateTime();
  }

  updateTime() {

    let handle = setInterval( () => {
      let date = new Date();
      this.setState( {date: date } );
    },
      1000
    );
  }

  render () {
    let dateString = this.state.date.toTimeString().split(" ");

    return (
      <div className="clock">
        <div className="clock-section">
          <h3>
            <span>Time:</span>
            <span>{dateString[0]} {dateString[2].replace(/[()]/g, '')}</span>
          </h3>
        </div>
        <div className="clock-section">
          <h3>
            <span>Date:</span>
            <span>{this.state.date.toDateString()}</span>
          </h3>
        </div>
      </div>
    );
  }
}

export {Weather, Clock};
