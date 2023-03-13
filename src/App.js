import { LinkPage } from "./pages/LinkPage";
import { WrongPageCustom } from "./pages/WrongPageCustom";
import {ChatsPage} from "./pages/ChatsPage";

export const App = () => {
  switch (window.location.pathname) {
    case '/chats':
      return ChatsPage();
    case "/500":
      return WrongPageCustom("500", "Мы уже фиксим", {
        href: "/",
        text: "Назад к чатам",
      });
    case "/404":
      return WrongPageCustom("404", "Не туда попали", {
        href: "/",
        text: "Назад к чатам",
      });
    default:
      return LinkPage();
  }
};
