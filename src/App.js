import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 16;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0,
    country: "in",
    mode: "dark"
  };

  setProgress = (progress) => {
    this.setState({
      progress: progress
    });
  };

  setCountry = (cntry) => {
    this.setState({
      country: cntry
    });
  };

  toggleMode = (cls) => {
    if (this.state.mode === "light") {
      this.setState({
        mode: "dark"
      });
      document.body.style.backgroundColor = "#3A3B3C";
    } else {
      this.setState({
        mode: "light"
      });
      document.body.style.backgroundColor = "white";
    }
  };

  componentDidMount() {
    if (this.props.mode === "light") {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "#3A3B3C";
    }
  }

  // componentDidUpdate() {
  //   if (this.props.mode === "light") {
  //     document.body.style.backgroundColor = "white";
  //   } else {
  //     document.body.style.backgroundColor = "#3A3B3C";
  //   }
  // }
  render() {
    return (
      <div>
        <LoadingBar color="#007bff" height={3} progress={this.state.progress} />
        <Navbar
          mode={this.state.mode}
          toggleMode={this.toggleMode}
          country={this.state.country}
          setCountry={this.setCountry}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                mode={this.state.mode}
                key="general"
                pageSize={this.pageSize}
                country={this.state.country}
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/home"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                mode={this.state.mode}
                key="general"
                pageSize={this.pageSize}
                country={this.state.country}
                category="general"
              />
            }
          ></Route>
          <Route exact path="/about" element={<About mode={this.state.mode} />}></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                mode={this.state.mode}
                key="business"
                pageSize={this.pageSize}
                country={this.state.country}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                mode={this.state.mode}
                key="entertainment"
                pageSize={this.pageSize}
                country={this.state.country}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                mode={this.state.mode}
                key="health"
                pageSize={this.pageSize}
                country={this.state.country}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                mode={this.state.mode}
                key="science"
                pageSize={this.pageSize}
                country={this.state.country}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                mode={this.state.mode}
                key="sports"
                pageSize={this.pageSize}
                country={this.state.country}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                mode={this.state.mode}
                key="technology"
                pageSize={this.pageSize}
                country={this.state.country}
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
