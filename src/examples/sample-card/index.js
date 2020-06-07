import React from "react";

import { data, schema } from "./dummy-data";

import "./index.css";

export default props => (
  <div className="card-1">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-8 col-xs-12 col-md-offset-3 col-sm-offset-2">
          <div className="card">
            <div className="image stensil-dark">
              <img
                className="stensil-ignore"
                src="http://assets.materialup.com/uploads/fc97b003-ba72-4c6e-9dd3-19bf5002c244/preview.jpg"
                width="100%"
                alt=""
              />
            </div>

            <div className="text">
              <div className="fab stensil-ignore">&#43;</div>

              <h3 className="stensil">{props.title}</h3>
              <p className="stensil-para">{props.para}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { data, schema };
