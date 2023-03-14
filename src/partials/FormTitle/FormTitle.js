import Handlebars from "handlebars";
import * as classes from "./styles.module.css";

export const FormTitle = (text) => {
  return Handlebars.compile(`
        <h4 class=${classes.title}>${text}</h4>
    `);
};
