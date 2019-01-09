import React, { Component } from "react";

import WholeMap from "./WholeMap/WholeMap"
import FindPlace from "./FindPlace/FindPlace"
import InfoPlace from "./InfoPlace/InfoPlace"
class App extends Component {
  render() {
    return (
      <div>
        <WholeMap/>
        <FindPlace/>
        <InfoPlace />
        <div />
      </div>
    );
  }
}

export default App;
