import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { RequestContextProvider } from "./services/RequestContext";
import { UserContextProvider } from "./services/UserContext";

import Header from "../src/components/Header";

import Home1 from "./components/Home1";

import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";


export default class App extends Component {
    render() {
      return (
        <RequestContextProvider baseURL={"http://localhost:8000/"}>
          <UserContextProvider>
            <BrowserRouter>
            <Header />
              <div style={{ backgroundColor: "#ffff", margin: "0" }}>

                    <Route path="/" exact component={Home1} />
                    <Route path="/AboutUs" exact component={AboutUs} />
                    <Route path="/ContactUs" exact component={ContactUs} />

              </div>
            </BrowserRouter>
          </UserContextProvider>
        </RequestContextProvider>
      );
    }
}
  