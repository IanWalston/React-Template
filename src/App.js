import React from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import WelcomePage from "./components/Pages/WelcomePage";
import AboutPage from "./components/Pages/AboutPage";
import FaithPage from "./components/Pages/FaithPage";
import ProposalPage from "./components/Pages/ProposalPage";
import PhotosPage from "./components/Pages/PhotosPage";
import DetailsPage from "./components/Pages/DetailsPage";
import AccommodationsPage from "./components/Pages/AccommodationsPage";

import "./index.css";

class App extends React.Component {
  state = {
    page: "Welcome",
    pages: [
      "About Us",
      "Our Faith",
      "The Proposal",
      "Photos",
      "Wedding Details",
      "Accommodations"
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
              {this.state.page === "Welcome" ? (
                <WelcomePage />
              ) : this.state.page === "About Us" ? (
                <AboutPage />
              ) : this.state.page === "Our Faith" ? (
                <FaithPage />
              ) : this.state.page === "The Proposal" ? (
                <ProposalPage />
              ) : this.state.page === "Photos" ? (
                <PhotosPage />
              ) : this.state.page === "Wedding Details" ? (
                <DetailsPage />
              ) : this.state.page === "Accommodations" ? (
                <AccommodationsPage />
              ) : null}
            </div>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default App;
