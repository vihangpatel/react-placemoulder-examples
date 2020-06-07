import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  StencilList,
  Stencil,
  createObjectFromSchema
} from "react-placemoulder";

import SampleCard, {
  data as sampleData,
  schema as sampleCardSchema
} from "./examples/sample-card";
import ScoreCard, {
  data as scoreCardData,
  schema as scoreCardSchema
} from "./examples/score-card";
import WhatsAppCard, { data as wData } from "./examples/whatsapp";
import ShareChatCard, { data as sharechatData } from "./examples/share-chat";
import FbCard, { data as fbData } from "./examples/facebook";

import "./styles.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <h3>
        Create Skeletons out of your existing code using{" "}
        <a href="https://bit.ly/react-placemoulder">react-placemoulder</a>
      </h3>
      <button onClick={() => setLoading(!loading)}>
        {loading ? "Turn off Loading" : "Turn on Loading"}
      </button>
      <div className="grid">
        <section>
          <h1>Score Card </h1>
          {loading ? (
            <Stencil>
              <ScoreCard {...createObjectFromSchema(scoreCardSchema)} />
            </Stencil>
          ) : (
            <ScoreCard {...scoreCardData} />
          )}
        </section>
        <section>
          <h1>WhatsAppCard </h1>

          {loading ? (
            <StencilList length={3} Component={WhatsAppCard} data={wData} />
          ) : (
            [...Array(3)].map((_, index) => (
              <WhatsAppCard key={index} {...wData} />
            ))
          )}
        </section>
        <section>
          <h1>Sharechat Card </h1>
          {loading ? (
            <Stencil>
              <ShareChatCard {...sharechatData} />
            </Stencil>
          ) : (
            <ShareChatCard {...sharechatData} />
          )}
        </section>
        <section>
          <h1>Facebook Story Card </h1>
          {loading ? (
            <Stencil>
              <FbCard {...fbData} />
            </Stencil>
          ) : (
            <FbCard {...fbData} />
          )}
        </section>
        <section>
          <h1>Sample Card </h1>
          {loading ? (
            <StencilList
              length={2}
              Component={SampleCard}
              schema={sampleCardSchema}
            />
          ) : (
            [...Array(2)].map((_, index) => (
              <SampleCard key={index} {...sampleData} />
            ))
          )}
        </section>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
