import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Stencil,
  StencilList,
  StencilWrapper,
  createObjectFromSchema,
} from 'react-placemoulder';

import SampleCard, {
  data as sampleData,
  schema as sampleCardSchema,
} from './examples/sample-card';
import ScoreCard, {
  data as scoreCardData,
  schema as scoreCardSchema,
} from './examples/score-card';
import WhatsAppCard, { data as wData } from './examples/whatsapp';
import ShareChatCard, { data as sharechatData } from './examples/share-chat';
import FbCard, { data as fbData } from './examples/facebook';

import './styles.css';

const exampleMap = [
  {
    title: 'Score Card',
    Component: ScoreCard,
    schema: scoreCardSchema,
    data: scoreCardData,
  },
  {
    title: 'WhatsAppCard',
    Component: WhatsAppCard,
    data: wData,
    repeat: 3,
    useWrapper: true,
  },
  { title: 'Sharechat Card', Component: ShareChatCard, data: sharechatData },
  { title: 'Facebook Story Card', Component: FbCard, data: fbData },
  { title: 'Sample Card', Component: SampleCard, data: sampleData, repeat: 2 },
];

function App() {
  const [loading, setLoading] = useState(true);

debugger
  return (
    <div className="App">
      <h3 className="app-title">
        Create Skeletons out of your existing code using{' '}
        <a href="https://bit.ly/react-placemoulder">react-placemoulder</a>
      </h3>
      <button onClick={() => setLoading(!loading)}>
        {loading ? 'Turn off Loading' : 'Turn on Loading'}
      </button>
      <div className="grid">
        {exampleMap.map(
          ({ title, Component, repeat, schema, data, useWrapper }) => (
            <section key={title}>
              <h1>{title} </h1>
              {loading ? (
                repeat ? (
                  useWrapper ? (
                    <StencilWrapper repeat={repeat}>
                      <Component
                        {...data}
                        {...createObjectFromSchema(schema)}
                      />
                    </StencilWrapper>
                  ) : (
                    <StencilList
                      length={repeat}
                      Component={Component}
                      data={data}
                      schema={schema}
                      className="vertical-list"
                    >
                      <Component
                        {...data}
                        {...createObjectFromSchema(schema)}
                      />{' '}
                    </StencilList>
                  )
                ) : (
                  <Stencil>
                    <Component {...data} {...createObjectFromSchema(schema)} />
                  </Stencil>
                )
              ) : (
                <Component  {...data} {...createObjectFromSchema(schema)} />
              )}
            </section>
          )
        )}
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
