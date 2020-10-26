import './App.css';
import React from 'react';
import {FNButton, FNComponent, FNBlock} from "./sandbox/FuncComponent/index";
import { element1, element2 } from './sandbox/JSX/index';

import { ClassComponent } from "./sandbox/ClassComponent/index";


// import { ClassComponent } from './sandbox/ClassComponent/index';


class App extends React.Component {
  render() {
    return(
        <React.Fragment>
          {/*<FNButton className="SomeClass" cssName="red"/>*/}
          <FNButton cssName="button-success"/>
          <FNButton cssName="button-error"/>
          <FNButton cssName="button-default"/>
          <FNBlock fnTitle="TiTlE" fnBody="BoDy" />
          <ClassComponent fnTitle="TiTlE" fnBody="BoDy" />
          {/*<FNComponent className="SomeClass" cssName="red"/>*/}
        </React.Fragment>
    )
  }
}

export default App;
