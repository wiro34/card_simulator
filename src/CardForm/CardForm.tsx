/** @format */

import React, { ChangeEvent } from "react";
import { CardValues } from "../App";
import classes from "./CardForm.module.scss";

interface Props {
  values: CardValues;
  onChange: (values: CardValues) => void;
}

const CardForm: React.FC<Props> = ({ values, onChange }) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className={classes.CardFormContainer}>
      <table className={classes.CardFormTable}>
        <caption>Card Details</caption>
        <tbody>
          <tr>
            <th>Title</th>
            <td>
              <input
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <th>Backgroud Color</th>
            <td>
              <input
                type="color"
                name="bgcolor"
                value={values.bgcolor}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <th>Point</th>
            <td>
              <input
                type="text"
                name="point"
                value={values.point}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <th>Text</th>
            <td>
              <textarea name="text" onChange={handleChange}>
                {values.text}
              </textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CardForm;
