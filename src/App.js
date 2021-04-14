import React from "react";
import "./App.css";
import Test from "./components/test";
// import image from "./data/image.json";
import dataTests from "./data/datatest.json";

function App() {
  return (
    <div className='App'>
           {dataTests.map((dataTest) => {
        return (
          <div>
            <Test title={dataTest.title} paragraph={dataTest.paragraph} imagePath={dataTest.imagePath} paragraph2={dataTest.paragraph2} />
            {/* <Test title={dataTest.title} imagePath={dataTest.imagePath} />
            <Test title={dataTest.title} paragraph={dataTest.paragraph} /> */}
          </div>
        );
      })}
    </div>
  );
}
export default App;
