import React from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import PageOne from "./components/Pages/PageOne";
import PageTwo from "./components/Pages/PageTwo";
import PageThree from "./components/Pages/PageThree";
import PageFour from "./components/Pages/PageFour";

import "./index.css";

class App extends React.Component {
  state = {
    page: "Page One",
    pages: ["Page Two", "Page Three", "Page Four"]
  };

  setpage = page => {
    this.setState({ page: page });
  };

  render() {
    return (
      <div>
        <Navbar setpage={this.setpage} pages={this.state.pages} />
        <Wrapper>
            <div className="row">
              {this.state.page === "Page One" ? (
                <PageOne />
              ) : this.state.page === "Page Two" ? (
                <PageTwo />
              ) : this.state.page === "Page Three" ? (
                <PageThree />
              ) : this.state.page === "Page Four" ? (
                <PageFour />
              ) : null}
            </div>
        </Wrapper>
      </div>
    );
  }
}

export default App;
