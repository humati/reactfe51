import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import DemoStateless from './Component/DemoStateless';
// import DemoStateFul from './Component/DemoStateFul';
import BaiTapLayout1 from './Component/BaiTapLayoutComponents/BaiTapLayout1';
import Databinding from './Databinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';

function App() {
  return (
    <div className="App">
      {/* <DemoStateless />
      <DemoStateFul /> */}
      {/* <BaiTapLayout1 /> */}
      {/* <Databinding /> */}
      <HandleEvent />
    </div>
  );
}

export default App;
