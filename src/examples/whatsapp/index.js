import React from "react";

import { data, schema } from "./dummy-data";

import "./index.css";

const WhatsAppCard = props => (
  <div className="whatsapp-card">
    <div className="whatsapp-avatar stensil">
      <img src={props.avatar} alt={props.name} className="stensil-ignore"/>
    </div>
    <div className="whatsapp-chat-frame">
      <span className="whatsapp-name stensil">{props.name}</span>
      <p className="whatsapp-last-chat stensil">{props.lastChat}</p>
    </div>
    <div className="whatsapp-right-block">
      <div className="stensil">{props.lastSeen}</div>
    </div>
  </div>
);

export default WhatsAppCard;

export { data, schema };
