import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./resources/css/App.css";
import Homes from "./resources/components/Homes";
function Home(props) {
  return (
    <>
      
      <main>
        {<Homes />}
        {/* <About /> */}
      </main>
    </>
  );
}
export default Home;
