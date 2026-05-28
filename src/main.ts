import "./styles/index.scss";

import { renderChatsPage } from "./pages/chats/chats";
import { renderLoginPage } from "./pages/login/login";
import { renderRegisterPage } from "./pages/register/register";
import { renderError404Page } from "./pages/errors/error404";
import { renderError500Page } from "./pages/errors/error500";
import { renderProfilePage, initProfilePage } from "./pages/profile/profile";

const app = document.querySelector("#app");

const renderApp = (): void => {
  if (!app) {
    return;
  }

  const hash = window.location.hash;

  switch (hash) {
    case "#/login":
      app.innerHTML = renderLoginPage();
      break;

    case "#/register":
      app.innerHTML = renderRegisterPage();
      break;

    case "#/404":
      app.innerHTML = renderError404Page();
      break;

    case "#/500":
      app.innerHTML = renderError500Page();
      break;

    case "#/profile":
      app.innerHTML = renderProfilePage();
      initProfilePage();
      break;

    default: {
      app.innerHTML = renderChatsPage();

      const chatBody = document.getElementById("chatBody");

      requestAnimationFrame(() => {
        if (chatBody) {
          chatBody.scrollTop = chatBody.scrollHeight;
        }
      });
    }
  }
};

window.addEventListener("hashchange", renderApp);

renderApp();
