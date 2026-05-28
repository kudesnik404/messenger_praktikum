import { renderErrorPage } from "../../components/error/error";

export const renderError500Page = (): string => {
  return renderErrorPage({
    code: "500",
    message: "Мы уже фиксим",
  });
};
