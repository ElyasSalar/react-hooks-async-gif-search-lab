import React from "react";

import NavBar from "./NavBar";
import GifiListContainer from './GifListContainer';


function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifiListContainer />
    </div>
  );
}

export default App;
