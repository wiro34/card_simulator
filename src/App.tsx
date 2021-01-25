/** @format */

import React, { useState } from "react";
import CardCanvas from "./CardCanvas/CardCanvas";
import CardForm from "./CardForm/CardForm";
import classes from "./App.module.scss";

export interface CardValues {
  title: string;
  text: string;
  bgcolor: string;
  point?: string;
}

function App() {
  const [values, setValues] = useState<CardValues>({
    title: "",
    text: "",
    bgcolor: "#ffffff",
  });

  const handleChange = (values: CardValues) => {
    setValues(values);
  };

  return (
    <div className={classes.App}>
      <h1>Card Simulator</h1>
      <div>
        <CardForm values={values} onChange={handleChange} />
        <CardCanvas values={values} />
      </div>
    </div>
  );
}

export default App;
