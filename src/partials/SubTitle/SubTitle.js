import Handlebars from "handlebars";
import * as classes from "./styles.module.css";

export const SubTitle = (text) => {
  return Handlebars.compile(`
        <p class=${classes.subTitle}>${text}</p>
    `);
};
