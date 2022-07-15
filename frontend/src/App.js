import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { RequestContextProvider } from "./services/RequestContext";
import { UserContextProvider } from "./services/UserContext";


import Home1 from "./components/Home1";


export default class App extends Component {
    render() {
      return (
        <RequestContextProvider baseURL={"http://localhost:8000/"}>
          <UserContextProvider>
            <BrowserRouter>

              <div style={{ backgroundColor: "#ffff", margin: "0" }}>

                    <Route path="/" exact component={Home1} />
                    
              </div>
            </BrowserRouter>
          </UserContextProvider>
        </RequestContextProvider>
      );
    }
}
  