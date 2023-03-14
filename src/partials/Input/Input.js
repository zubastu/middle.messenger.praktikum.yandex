import Handlebars from "handlebars";
import * as classes from "./styles.module.css";

export const Input = (type, text, name) => {
  return Handlebars.compile(`
        <div class=${classes.inputContainer}>
            <label class=${classes.label} for=${name}>${text}</label>
            <input class=${classes.input} type=${type} name=${name}>
            <span class=${classes.error}>Ошибка</span>
        </div>
    `);
};
