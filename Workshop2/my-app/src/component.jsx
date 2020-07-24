import React, { Component } from "react";

export default class component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increment: 0,
      page: 1
    };
  }
  output = () => {
    if (this.state.page === 1) {
      return (
        <div>
          this is page1!
          <div>
            <ul>
              {this.props.workArray.map(WA => (
                <li key={WA.id}>
                  {" "}
                  {WA.name}: {WA.title}, {WA.location}
                </li>
              ))}
            </ul>
          </div>
        </div>
        // <div>
        //   {this.props.workArray.map(workarray => (
        //     <li>{workarray.name}</li>
        //   ))}
        // </div>
      );
    } else if (this.state.page === 2) {
      return (
        <div>
          this is page2
          <ul>
            {this.props.volunteerArray.map(VA => (
              <li key={VA.id}>
                {" "}
                {VA.name}: {VA.title}, {VA.location}
              </li>
            ))}
          </ul>
        </div>

        // <div>
        //   {" "}
        //   {this.props.volunteerArray.map(workarray => (
        //     <li>{workarray.name}</li>
        //   ))}
        // </div>
      );
    }
  };

  handleButton1 = () => {
    this.setState({ page: 1 });
  };
  handleButton2 = () => {
    this.setState({ page: 2 });
  };
  handleButton = () => {
    var newvar = this.state.increment;
    newvar++; // newvar + 1
    this.setState({ increment: newvar });
  };

  render() {
    return (
      <div>
        {this.props.age}
        {this.state.increment}
        {/* <button onClick={this.handleButton}>Click me!</button> */}

        <button onClick={this.handleButton1}>Work File</button>
        <button onClick={this.handleButton2}>Volunteer File</button>
        {this.output()}
        {/*     
        <p> the age is: {this.props.age}</p> {this.output()}
        <ul></ul> */}
      </div>
    );
  }
}
