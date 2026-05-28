import Handlebars from 'handlebars';

import template from './error.hbs?raw';

import './error.scss';

interface ErrorPageProps {
    code: string;
    message: string;
}

export const renderErrorPage = (
    props: ErrorPageProps,
): string => {
    const compiledTemplate = Handlebars.compile(template);

    return compiledTemplate(props);
};