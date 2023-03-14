import Handlebars from "handlebars";
import * as classes from "./styles.module.css";
import profileImage from "../../../static/images/profile.svg";
import { PasswordForm } from "../../partials/PasswordForm/PasswordForm";
import { ProfileSideNavigation } from "../../partials/ProfileSideNavigation/ProfileSideNavigation";

export const ChangePassword = () => {
  return Handlebars.compile(`
        <section class=${classes.container}>
            <div class=${classes.imageContainer}>
              <img class=${classes.image} src=${profileImage} alt="Профиль">
            </div>
            
            ${ProfileSideNavigation()}
            
            <div class=${classes.formContainer}>
               ${PasswordForm()}
            </div>
        </section>
    `)();
};
