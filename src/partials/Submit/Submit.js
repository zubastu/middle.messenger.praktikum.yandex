import Handlebars from "handlebars";
import * as classes from "./styles.module.css";

export const Submit = (text) => {
  return Handlebars.compile(`
        <button class=${classes.button} type="submit">${text}</button>
    `);
};
