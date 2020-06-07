import React from "react";

import { data } from "./dummy-data";

import "./index.scss";

export default ({ topic, time, desc, text1, text2, text3 }) => (
  <div class="fb-card">
    <div class="header">
      <div class="options">
        <i class="fa fa-chevron-down" />
      </div>
      <img
        alt="Alt text"
        class="co-logo stensil"
        src="http://placehold.it/40x40"
      />
      <div class="co-name">
        <span href="#" className="stensil">
          {topic}
        </span>
      </div>
      <div class="time stensil">
        <span href="#">{time}</span> · <i class="fa fa-globe" />
      </div>
    </div>
    <div class="content">
      <p className="stensil-para">
        {desc} <a href="http://placehold.it/300">http://placehold.it/300</a> See
        More
      </p>
    </div>

    <div class="reference">
      <img class="reference-thumb" src="http://placehold.it/476x249" alt="" />
      <div class="reference-content">
        <div class="reference-title stensil">{text1}</div>
        <div class="reference-subtitle stensil">{text2}</div>
        <div class="reference-font stensil">{text3}</div>
      </div>
    </div>
    <div class="social">
      <div class="social-content" />
      <div class="social-buttons stensil-ignore">
        <span>
          <i class="fa fa-thumbs-up" />
          Like
        </span>
        <span>
          <i class="fa fa-comment" />
          Comment
        </span>
        <span>
          <i class="fa fa-share" />
          Share
        </span>
      </div>
    </div>
  </div>
);

export { data };
