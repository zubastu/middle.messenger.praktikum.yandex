import Handlebars from "handlebars";
import * as classes from './styles.module.css';

export const MenuLink = (href, text) => {
    return Handlebars.compile(`
        <a class=${classes.link} href=${href}>${text}</a>
    `)
}