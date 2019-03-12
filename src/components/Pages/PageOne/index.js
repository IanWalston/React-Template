import React from "react";
import "./index.css";
import { Parallax, Background } from "react-parallax";

function PageOne(props) {
  return (
    <div>
      <div className="row mt-4 pt-4">
        <h1> Page One</h1>
        <Parallax
          blur={10}
          bgImage={require("path/to/image.jpg")}
          bgImageAlt="the cat"
          strength={200}
        >
          Put some text content here - even an empty div with fixed dimensions
          to have a height for the parallax.
          <div style={{ height: "200px" }} />
        </Parallax>
      </div>
    </div>
  );
}

export default PageOne;
