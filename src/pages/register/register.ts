import { renderAuthForm } from "../../components/auth/auth";

import "../../layouts/auth-layout.scss";

export const renderRegisterPage = (): string => {
  return `
    <main class="auth-layout">
      ${renderAuthForm({
        title: "Регистрация",
        buttonText: "Зарегистрироваться",
        linkText: "Войти",
        linkHref: "#/login",

        fields: [
          {
            label: "Имя",
            type: "text",
            name: "first_name",
            autocomplete: "given-name",
          },
          {
            label: "Фамилия",
            type: "text",
            name: "second_name",
            autocomplete: "family-name",
          },
          {
            label: "Логин",
            type: "text",
            name: "login",
            autocomplete: "username",
          },
          {
            label: "Почта",
            type: "email",
            name: "email",
            autocomplete: "email",
          },
          {
            label: "Телефон",
            type: "tel",
            name: "phone",
            autocomplete: "tel",
          },
          {
            label: "Пароль",
            type: "password",
            name: "password",
            autocomplete: "current-password",
          },
        ],
      })}
    </main>
  `;
};
