import Handlebars from "handlebars";
import * as classes from "./styles.module.css";
import { Form } from "../../partials/Form/Form";
import { Input } from "../../partials/Input/Input";
import { Submit } from "../../partials/Submit/Submit";

const children = [
  Input("text", "Почта", "email"),
  Input("text", "Логин", "login"),
  Input("text", "Имя", "firstName"),
  Input("text", "Фамилия", "secondName"),
  Input("text", "Логин", "login"),
  Input("number", "Телефон", "phone"),
  Input("password", "Пароль", "phone"),
  Input("password", "Пароль(еще раз)", "phone"),
  Submit("Авторизоваться"),
];

export const SignUp = () => {
  return Handlebars.compile(`
        <section>
           ${Form(
             "Регистрация",
             { href: "/sign-in", text: "Войти" },
             children
           )()}
        </section>
    `)();
};
