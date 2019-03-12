import React from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import PageOne from "./components/Pages/PageOne";
import PageTwo from "./components/Pages/PageTwo";


import "./index.css";

class App extends React.Component {
  state = {
    page: "Page One",
    pages: [
      "Page Two",
      "Page Three",
      "Page Four",
    ]
  };

  setpage = page => {
    this.setState({ page: page });
  };

  render() {
    return (
      <div>
        <Navbar setpage={this.setpage} pages={this.state.pages} />
        <Wrapper>
          <div className="container">
            <div className="row">
              {this.state.page === "Page One" ? (
                <PageOne />
              ) : this.state.page === "Page Two" ? (
                <PageTwo />
              ) : null}
            </div>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default App;
