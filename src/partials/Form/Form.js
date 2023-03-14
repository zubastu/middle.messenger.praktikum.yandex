import Handlebars from "handlebars";
import * as classes from "./styles.module.css";
import { MenuLink } from "../Menu-link/MenuLink";
import { FormTitle } from "../FormTitle/FormTitle";

export const Form = (title, { href, text }, children) => {
  return Handlebars.compile(`
        <section class=${classes.container}>
            ${FormTitle(title)()}
            <form class=${classes.form}>
                ${children.map((i) => i()).join("")}
            </form>
            ${MenuLink(href, text)()}
        </section>
    `);
};
