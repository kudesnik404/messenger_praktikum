import Handlebars from 'handlebars';

import template from './chats.hbs?raw';

import './chats.scss';

export const renderChatsPage = (): string => {
    const compiledTemplate = Handlebars.compile(template);

    return compiledTemplate({});
};
