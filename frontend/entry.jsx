import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs.jsx';
import { Clock , Weather } from './weather_clock.jsx';
import Autocomplete from './autocomplete.jsx';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  ReactDOM.render(
    <div>
      <Tabs objects={TABS} />
      <Weather />
      <Clock />
      <Autocomplete names={NAMES} />
    </div>,
    root
  );
});



let TABS = [
  {title: "One", content: "This is tab one!!"},
  {title: "Two", content: "This is tab Two!!"},
  {title: "Three", content: "This is tab three!!"},
];

let NAMES = [
  "Allan", "Suzy", "Robertson", "Quarky", "Blips", "Margaret", "Bubba"
]
