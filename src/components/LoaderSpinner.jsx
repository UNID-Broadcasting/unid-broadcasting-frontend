import React from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

const LoaderSpinner = () => {
  return (
    <div className="m-16">
      <Segment style={{ height: "200px" }}>
        <Dimmer active inverted>
          <Loader size="huge" inverted>
            Cargando...
          </Loader>
        </Dimmer>
      </Segment>
    </div>
  );
};

export default LoaderSpinner;
