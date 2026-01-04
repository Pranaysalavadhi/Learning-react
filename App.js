import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {},
  "Learning React is hard unit i follow namaste react web series"
);

console.log(heading)

const jsxheading = <h1 id="heading" >Creating h1 tag using jsx</h1>

const root = ReactDOM.createRoot(
  document.getElementById("header")
);

root.render(heading);
root.render(jsxheading)
