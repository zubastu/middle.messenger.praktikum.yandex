import { LinkPage } from "./pages/LinkPage";
import { WrongPageCustom } from "./pages/WrongPageCustom";
import { ChatsPage } from "./pages/ChatsPage";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Profile } from "./pages/Profile";

export const App = () => {
  switch (window.location.pathname) {
    case "/profile/change-info":
      return Profile();
    case "/profile/change-password":
      return Profile();
    case "/profile":
      return Profile();
    case "/sign-up":
      return SignUp();
    case "/sign-in":
      return SignIn();
    case "/chats":
      return ChatsPage();
    case "/500":
      return WrongPageCustom("500", "Мы уже исправляем", {
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
