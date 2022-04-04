import React from "react";
import { Link } from "react-router-dom";
// import { DataProvider } from "./GlobalState";
// import Header from "./components/headers/Header";
// import MainPages from "./components/mainpages/Pages";

function Fooldal() {
  return (
    <>
      {/* <Link to="/kezdo">Kezdőlap</Link> */}
      <div className="cim">
        <h2>Legyél te is önkéntes!</h2>
      </div>
      <div>
        <table>

        <tr><td><img src="Ellipse.svg" alt="minta"></img></td><td><img src="kutya.png" alt="kutya"></img></td></tr>
        </table>
        </div>

      <table className="kepek">
        <tr>
          <th><img src="phone-call.png" alt="hivas"></img></th>
          <th>06306485393</th>
        </tr>
        <tr>
          <th><img src="email.png" alt="email"></img></th>
          <th><p>furgelabakallatmenhely@gmail.com</p></th>
        </tr>
      </table>
    </>
  );
}

export default Fooldal;


