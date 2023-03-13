import Handlebars from "handlebars";
import * as classes from "./styles.module.css";

export const Title = (text) => {
  return Handlebars.compile(`
        <h2 class=${classes.title}>${text}</h2>
    `);
};
