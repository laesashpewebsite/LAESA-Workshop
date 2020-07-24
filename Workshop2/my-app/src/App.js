import React, { Component } from "react";
import logo1 from "./logo.svg";
import pfp from "./pfp.jpg";
import banner from "./images/SHPE_logo.png";
import "./App.css";
import "./workshp.css";

import WorkComponent from "./component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work: [
        { id: 0, name: "work 1", title: "", location: "", info: "" },
        { id: 1, name: "work 2 ", title: "", location: "", info: "" },
        { id: 2, name: " work 3 ", title: "", location: "", info: "" },
        { id: 3, name: " work 4 ", title: "", location: "", info: "" }
      ],
      volunteer: [
        {
          id: 0,
          name: "volunteer 1",
          info: ""
        },
        {
          id: 1,
          name: "volunteer 2",
          info: ""
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo1} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div id="main-tag">
          <div>
            <img src={banner} alt="banner" class="banner" />
          </div>
          <div>
            <img src={pfp} alt="pfp" class="pfp" />
            <h2>Ostavo Palacios</h2>
            <p>this is my bio</p>
          </div>

          <div>
            <ul>
              <h2> Contact</h2>
              <li>
                {" "}
                <span>Tel: </span> xxx-xxx-xxxx
              </li>
              <li>
                {" "}
                <span>Email: </span> email.something@coolemail.com
              </li>
              <li>
                {" "}
                <span>LinkedIn:</span>
                <a href="https://www.linkedin.com/in/ostavo-palacios/">
                  Linkedin
                </a>
              </li>
            </ul>
            {/* <WorkComponent
              age={23}
              workArray={this.state.work}
              volunteerArray={this.state.volunteer}
            /> */}
            <WorkComponent
              age={23}
              volunteerArray={this.state.volunteer}
              workArray={this.state.work}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
