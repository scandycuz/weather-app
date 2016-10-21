import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs.jsx';
import Clock from './weather_clock.jsx';
import Autocomplete from './autocomplete.jsx';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  ReactDOM.render(
    <div>
      <Tabs objects={TABS} />
      <Clock />
    </div>,
    root
  );
});


let TABS = [
  {title: "One", content: "this is tab one!!"},
  {title: "Two", content: "this is tab Two!!"},
  {title: "Three", content: "this is tab three!!"},
];
