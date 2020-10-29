import './App.css';
import React from 'react';
import {FNButton} from "./components/FuncComponent/fnButton";
import {FNBlock} from "./components/FuncComponent/fnBlock";
import { ClassComponent } from "./components/ClassComponent/blockPopup";


// import { ClassComponent } from './sandbox/ClassComponent/index';


class App extends React.Component {
  render() {
    return(
        <React.Fragment>
          {/*BUTTON*/}
          <FNButton cssName="button-success"/>
          <FNButton cssName="button-error"/>
          <FNButton cssName="button-default"/>

          {/*COMPONENT*/}
          <FNBlock compCss="comp-success" fnTitle="Success title" fnBody="Success body" />
          <FNBlock compCss="comp-error" fnTitle="Error title" fnBody="Error body" />
          <FNBlock compCss="comp-default" fnTitle="Default title" fnBody="Default title" />

          {/*POPUP*/}
          <ClassComponent fnTitle="Block with POPUP!" fnBody="BoDy" />

        </React.Fragment>
    )
  }
}

export default App;
