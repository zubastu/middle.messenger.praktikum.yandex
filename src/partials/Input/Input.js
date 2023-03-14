import Handlebars from "handlebars";
import * as classes from "./styles.module.css";

export const Input = (type, text, name) => {
  return Handlebars.compile(`
        <label class=${classes.label}>
            ${text}
            <input class=${classes.input} type=${type} placeholder=${text} name=${name}>
        </label>
    `);
};
