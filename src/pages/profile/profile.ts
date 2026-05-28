import Handlebars from 'handlebars';

import template from './profile.hbs?raw';

import './profile.scss';

interface ProfileData {
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
}

const profileData: ProfileData = {
    first_name: 'Иван',
    second_name: 'Иванов',
    display_name: 'Иван',
    login: 'ivanivanov',
    email: 'pochta@yandex.ru',
    phone: '+7 (909) 967 30 30',
};

let isEditMode = false;
let isPasswordMode = false;

const compiledTemplate = Handlebars.compile(template);

export const renderProfilePage = (): string => {
    return compiledTemplate({
        display_name: profileData.display_name,

        isEditMode,
        isPasswordMode,

        fields: [
            {
                label: 'Почта',
                name: 'email',
                value: profileData.email,
            },
            {
                label: 'Логин',
                name: 'login',
                value: profileData.login,
            },
            {
                label: 'Имя',
                name: 'first_name',
                value: profileData.first_name,
            },
            {
                label: 'Фамилия',
                name: 'second_name',
                value: profileData.second_name,
            },
            {
                label: 'Имя в чате',
                name: 'display_name',
                value: profileData.display_name,
            },
            {
                label: 'Телефон',
                name: 'phone',
                value: profileData.phone,
            },
        ],
    });
};

const rerender = (): void => {
    const app = document.querySelector('#app');

    if (app) {
        app.innerHTML = renderProfilePage();

        initProfilePage();
    }
};

export const initProfilePage = (): void => {
    const editButton = document.getElementById(
        'editProfileButton',
    );

    const changePasswordButton = document.getElementById(
        'changePasswordButton',
    );

    const saveProfileButton = document.getElementById(
        'saveProfileButton',
    );

    const savePasswordButton = document.getElementById(
        'savePasswordButton',
    );

    editButton?.addEventListener('click', () => {
        isEditMode = true;

        rerender();
    });

    changePasswordButton?.addEventListener('click', () => {
        isPasswordMode = true;

        rerender();
    });

    saveProfileButton?.addEventListener('click', () => {
        const inputs = document.querySelectorAll<HTMLInputElement>(
            '.profile-card__input',
        );

        inputs.forEach((input) => {
            const key = input.name as keyof ProfileData;

            profileData[key] = input.value;
        });

        isEditMode = false;

        rerender();
    });

    savePasswordButton?.addEventListener('click', () => {
        isPasswordMode = false;

        rerender();
    });
};
