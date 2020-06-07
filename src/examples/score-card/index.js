import React from "react";

import Badge from "./badge";

import { data, schema } from "./dummy-data";

import "./index.css";

export default props => {
  return (
    <div className="score-card">
      <div className="left-panel">
        <div className="part upper-part">
          <span data-loader-stencil="true" className="title stensil">
            {props.title}
          </span>
          <span data-loader-stencil="true" className="sub-title stensil">
            {props.subTitle}
          </span>
        </div>
        <p className="stensil-para">{props.para}</p>
        <div className="part lower-part">
          <span data-stencil="true" className="status stensil">
            Status: {props.status}
          </span>
          <span data-stencil="true" className="score stensil">
            Score: {props.score}
          </span>
        </div>
      </div>
      <div className="right-panel">
        <div className="icon stensil-svg">
          <Badge />
        </div>
        <span data-loader-stencil="true" className="link-text stensil">
          {props.linkText}
        </span>
      </div>
    </div>
  );
};

export { data, schema };
