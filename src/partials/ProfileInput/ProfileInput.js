import Handlebars from "handlebars";
import * as classes from "./styles.module.css";

export const ProfileInput = (name, type, placeholder, label) => {
  return Handlebars.compile(`
        <div class=${classes.container}>
            <label class=${classes.label}>${label}</label>
            <input class=${classes.input} type=${type} name=${name} placeholder=${placeholder}>
        </div>
    `);
};
