import Handlebars from "handlebars";
import * as classes from "./styles.module.css";

import { Form } from "../../partials/Form/Form";
import { Input } from "../../partials/Input/Input";
import { Submit } from "../../partials/Submit/Submit";

const children = [
  Input("text", "Логин", "login"),
  Input("password", "Пароль", "password"),
  Submit("Авторизоваться"),
];

export const SignIn = () => {
  return Handlebars.compile(`
        <section>
           ${Form(
             "Вход",
             { href: "/sign-up", text: "Нет аккаунта?" },
             children
           )()}
        </section>
    `)();
};
