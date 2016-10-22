import React from 'react';

class Weather extends React.Component {
  constructor() {
    super();

  }

  render () {
    return (<h1>hello</h1>);
  }
}


class Clock extends React.Component {
  constructor() {
    super();

    this.updateTime.bind(this);

    let date = new Date();

    this.state = {date: date.getSeconds()};
  }

  componentDidMount() {
    this.updateTime();
  }

  updateTime() {

    setInterval( () => {
      let date = new Date();
      this.setState( {date: date.getSeconds()} );
    },
      1000
    );
  }

  render () {
    return (
      <div>
      <h1>{this.state.date}</h1>
      </div>
    );
  }
}

export {Weather, Clock};
