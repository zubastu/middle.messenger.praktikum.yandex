import Handlebars from "handlebars";
import * as classes from "./styles.module.css";
import { Title } from "../../partials/Title/Title";
import { MenuLink } from "../../partials/Menu-link/MenuLink";
import { SubTitle } from "../../partials/SubTitle/SubTitle";

export const WrongPageCustom = (title, subtitle, { href, text }) => {
  return Handlebars.compile(`
        <section class=${classes.container}>
          <div class=${classes.textContainer}>
            ${Title(title)()}
            ${SubTitle(subtitle)()}
          </div>
            ${MenuLink(href, text)()}
        </section>
    `)();
};
