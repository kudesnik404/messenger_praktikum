import { renderAuthForm } from "../../components/auth/auth";

import "../../layouts/auth-layout.scss";

export const renderRegisterPage = (): string => {
  return `
    <div class="auth-layout">
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
          },
          {
            label: "Фамилия",
            type: "text",
            name: "second_name",
          },
          {
            label: "Логин",
            type: "text",
            name: "login",
          },
          {
            label: "Почта",
            type: "email",
            name: "email",
          },
          {
            label: "Телефон",
            type: "tel",
            name: "phone",
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
