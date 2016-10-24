import React from 'react';

class Autocomplete extends React.Component {

  constructor(props) {
    super(props)

    this.state = { input: "", height: "" };
    this.handleClick = this.handleClick.bind(this);
    this.addEventListeners = this.addEventListeners.bind(this);
    this.updateInputState = this.updateInputState.bind(this)
    this.setHeight = this.setHeight.bind(this);
  }

  componentDidMount() {
    this.setHeight();
    this.addEventListeners();
  }

  addEventListeners() {
    let inputEl = document.getElementById("name-search-input");
    inputEl.addEventListener("input", this.updateInputState.bind(this));
  }

  setHeight() {
    let containerDiv = document.getElementsByClassName("name-search")[0];
    let height = `${containerDiv.clientHeight}px`;
    containerDiv.style.height = height;
  }

  updateInputState(e) {
    let input = e.target.value;
    this.setState({ input });
  }

  handleClick(e) {
    let input = e.target.innerHTML;

    this.setState({ input });
  }

  render() {
      let currentInput = this.state.input;
      let reg = new RegExp("^" + currentInput);

      return(
        <div className="name-search">
          <h3>Autocomplete</h3>
          <input id="name-search-input" type="text" value={currentInput} placeholder="Enter name"></input>
          <ul>
            { this.props.names.map( (name) => {
                if (name.toLowerCase().match(reg)) {
                  return (
                    <li key={name} onClick={this.handleClick}>{name}</li>
                  )
                }
            }) }
          </ul>
        </div>
      )
  }

}


export default Autocomplete;
