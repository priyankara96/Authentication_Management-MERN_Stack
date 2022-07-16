import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { RequestContextProvider } from "./services/RequestContext";
import { UserContextProvider } from "./services/UserContext";

import HomePage from './components/HomePage';


export default class App extends Component {
  render() {
    return (
      <RequestContextProvider baseURL={"http://localhost:8000/"}>
        <UserContextProvider>
          <BrowserRouter>
          {/* <Header /> */}
            <div style={{ backgroundColor: "#ffff", margin: "0" }}>

                  <Route path="/" exact component={HomePage} />

                {/* <Footer /> */}
            </div>
          </BrowserRouter>
        </UserContextProvider>
      </RequestContextProvider>
    );
  }
}