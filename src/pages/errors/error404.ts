import { renderErrorPage } from '../../components/error/error';

export const renderError404Page = (): string => {
    return renderErrorPage({
        code: '404',
        message: 'Не туда попали',
    });
};
