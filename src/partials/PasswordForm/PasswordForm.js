import Handlebars from "handlebars";
import * as classes from "./styles.module.css";
import { ProfileInput } from "../ProfileInput/ProfileInput";
import { Submit } from "../Submit/Submit";

const children = [
  ProfileInput("oldPassword", "password", "**************", "Старый пароль"),
  ProfileInput("newPassword", "password", "**************", "Новый пароль"),
  ProfileInput(
    "newPassword",
    "password",
    "**************",
    "Повторите новый пароль"
  ),
];

export const PasswordForm = () => {
  return Handlebars.compile(`
        <form class=${classes.form}>
            ${children.map((i) => i()).join("")}
            ${Submit("Сохранить")()}
        </form>
    `)();
};
