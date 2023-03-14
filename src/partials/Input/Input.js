import Handlebars from "handlebars";
import * as classes from "./styles.module.css";

export const Input = (type, text, name) => {
  return Handlebars.compile(`
        <input class=${classes.input} type=${type} placeholder=${text} name=${name}>
    `);
};
