// this file will have our react code
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("main"));

const Title = () => <h1>this is the title of the page</h1>;

const heading = <h1>heading from dharsan</h1>;
// creating components in jsx

const Headingcomponent = () => (
  <div id="container">
    <Title />
    { Title() }
    <h1>heading 1</h1>
    <h1>heading 2</h1>
  </div>
);

root.render(<Headingcomponent />);

console.log(Headingcomponent);
