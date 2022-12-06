import React, { Component } from "react";

import "./App.css";
// import ModalComponent from "./Componets/ModalComponent";
import MyModal from "./Componets/MyModal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyModal />
      </div>
    );
  }
}

export default App;
