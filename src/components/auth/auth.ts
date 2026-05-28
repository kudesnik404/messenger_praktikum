import Handlebars from "handlebars";

import template from "./auth.hbs?raw";

import "./auth.scss";

interface AuthField {
  label: string;
  type: string;
  name: string;
}

interface AuthFormProps {
  title: string;
  buttonText: string;
  linkText: string;
  linkHref: string;
  fields: AuthField[];
}

export const renderAuthForm = (props: AuthFormProps): string => {
  const compiled = Handlebars.compile(template);

  return compiled(props);
};
