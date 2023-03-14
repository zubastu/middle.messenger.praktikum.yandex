import Handlebars from "handlebars";
import * as classes from "./styles.module.css";
import profileImage from "../../../static/images/profile.svg";
import arrowImage from "../../../static/images/arrow.svg";
import { ProfileForm } from "../../partials/ProfileForm/ProfileForm";
import { MenuLink } from "../../partials/Menu-link/MenuLink";
import { Submit } from "../../partials/Submit/Submit";

export const Profile = () => {
  return Handlebars.compile(`
        <section class=${classes.container}>
            <div class=${classes.imageContainer}>
              <img class=${classes.image} src=${profileImage} alt="Профиль">
            </div>
            
            <div class=${classes.backLinkContainer}>
                <button class=${
                  classes.button
                }><img src=${arrowImage} alt="Назад"></button>
            </div>
            
            <div class=${classes.formContainer}>
                ${ProfileForm()}
                
               <div class=${classes.navigationContainer}>
                 <div class=${classes.borderContainer}>
                    ${MenuLink("/profile/change-info", "Изменить данные")()}
                </div>
                
                <div class=${classes.borderContainer}>
                    ${MenuLink("/profile/change-password", "Изменить пароль")()}
                </div>
                
                <div class=${classes.borderContainer}>
                    <button class=${classes.exitButton}>Выйти</button>
                </div>
                
                
               </div>
               
            </div>
            ${Submit("Сохранить")()}
        </section>
    `)();
};

/*class=${}*/
