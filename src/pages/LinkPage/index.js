import Handlebars from "handlebars";
import * as classes from "./styles.module.css";
import { MenuLink } from "../../partials/Menu-link/MenuLink";
import { linksData } from "../../utils/linksData";

export const LinkPage = () => {
  return Handlebars.compile(`
        <section class=${classes.container}>
        ${linksData.map((item) => MenuLink(item.href, item.link)()).join("")}
        </section>
    `)();
};
