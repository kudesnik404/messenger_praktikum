import { renderAuthForm } from "../../components/auth/auth";

import "../../layouts/auth-layout.scss";

export const renderLoginPage = (): string => {
  return `
    <div class="auth-layout">
      ${renderAuthForm({
        title: "Вход",
        buttonText: "Авторизоваться",
        linkText: "Нет аккаунта?",
        linkHref: "#/register",

        fields: [
          {
            label: "Логин",
            type: "text",
            name: "login",
          },
          {
            label: "Пароль",
            type: "password",
            name: "password",
          },
        ],
      })}
    </div>
  `;
};
