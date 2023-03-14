import Handlebars from "handlebars";
import * as classes from "./styles.module.css";

export const ChatsPage = () => {
    return Handlebars.compile(`
        <section>
            <p>Chats</p>
        </section>
    `)()
}