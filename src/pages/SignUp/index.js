import Handlebars from "handlebars";
import * as classes from "./styles.module.css";
import { Form } from "../../partials/Form/Form";
import { Input } from "../../partials/Input/Input";
import { Submit } from "../../partials/Submit/Submit";

const children = [
  Input("text", "Почта", "email"),
  Input("text", "Логин", "login"),
  Input("text", "Имя", "first_name"),
  Input("text", "Фамилия", "second_name"),
  Input("number", "Телефон", "phone"),
  Input("password", "Пароль", "password"),
  Input("password", "Пароль(еще раз)", "password"),
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
