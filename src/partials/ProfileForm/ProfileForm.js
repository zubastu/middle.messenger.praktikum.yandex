import Handlebars from "handlebars";
import * as classes from "./styles.module.css";
import { ProfileInput } from "../ProfileInput/ProfileInput";

const children = [
  ProfileInput("email", "text", "pochta@yandex.ru", "Почта"),
  ProfileInput("login", "text", "ivanivanov", "Логин"),
  ProfileInput("first_name", "text", "Иван", "Имя"),
  ProfileInput("second_name", "text", "Иванов", "Фамилия"),
  ProfileInput("display_name", "text", "Иван", "Имя в чате"),
  ProfileInput("phone", "text", "+7(909)9673030", "Телефон"),
];

export const ProfileForm = () => {
  return Handlebars.compile(`
        <form class=${classes.form}>
        <h5 class=${classes.username}>Иван</h5>
          ${children.map((i) => i()).join("")}
        </form>
    `)();
};
