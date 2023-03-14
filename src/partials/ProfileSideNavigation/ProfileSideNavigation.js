import Handlebars from "handlebars";
import * as classes from "./styles.module.css";
import arrowImage from "../../../static/images/arrow.svg";

export const ProfileSideNavigation = () => {
  return Handlebars.compile(`
        <div class=${classes.backLinkContainer}>
            <button class=${classes.button}><img src=${arrowImage} alt="Назад"></button>
        </div>
    `)();
};
