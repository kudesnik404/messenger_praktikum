import Handlebars from "handlebars";
import template from "./chats.hbs?raw";
import "./chats.scss";

interface Chat {
  name: string;
  text: string;
  time: string;
  notifications?: number;
  isChosen?: boolean;
}

interface Message {
  text: string;
  time: string;
  isSent: boolean;
}

const chats: Chat[] = [
  { name: "Андрей", text: "Изображение", time: "10:49", notifications: 2 },
  { name: "Киноклуб", text: "Вы: стикер", time: "10:49" },
  {
    name: "Илья",
    text: "Друзья, у меня для вас особенный выпуск новостей!",
    time: "10:49",
  },
  {
    name: "тет-а-теты",
    text: "И Human Interface Guidelines и Material Design рекомендуют",
    time: "10:49",
    notifications: 1,
  },
  {
    name: "1, 2, 3",
    text: "Миллионы россиян ежедневно проводят десятки часов свое.",
    time: "Пт",
  },
  { name: "Вадим", text: "Вы: Круто!", time: "Ср", isChosen: true },
  { name: "Андрей", text: "Изображение", time: "10:49", notifications: 2 },
  { name: "Киноклуб", text: "Вы: стикер", time: "10:49" },
  {
    name: "Илья",
    text: "Друзья, у меня для вас особенный выпуск новостей!",
    time: "10:49",
  },
  {
    name: "тет-а-теты",
    text: "И Human Interface Guidelines и Material Design рекомендуют",
    time: "10:49",
    notifications: 1,
  },
  {
    name: "1, 2, 3",
    text: "Миллионы россиян ежедневно проводят десятки часов свое.",
    time: "Пт",
  },
  { name: "Вадим", text: "Вы: Круто!", time: "Ср", isChosen: true },
];

interface Message {
  text: string;
  time: string;
  isSent: boolean;
}
interface MessageGroup {
  date: string;
  messages: Message[];
}
const messageGroups: MessageGroup[] = [
  {
    date: "19 июня",
    messages: [
      {
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac finibus ante. Phasellus nisl ligula, pulvinar sit amet ultrices nec, tincidunt auctor ante. Proin ornare a nibh a laoreet. Sed vehicula metus eget nisi imperdiet malesuada eget in nisi. Nunc et pharetra diam. Vivamus nisl lacus, scelerisque varius lorem eu, fringilla condimentum magna. Nulla dictum ante a metus tincidunt egestas non sed lectus. Vestibulum vehicula euismod enim, eget condimentum nisi euismod id.\n" +
          "\n",
        time: "9:45",
        isSent: true,
      },
      {
        text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin lacus lacus, pretium id augue ac, luctus egestas orci. Nunc vel leo rutrum dui semper eleifend vitae et quam. Vivamus dolor tortor, auctor nec consequat ac, sagittis sed enim. Fusce molestie urna sed quam rhoncus, sit amet vestibulum arcu bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam facilisis sem sem, at pulvinar mauris blandit vitae. Suspendisse sodales mi vitae ante scelerisque molestie. Quisque malesuada elit mi, ut faucibus magna dignissim eu. Nam sem risus, egestas eget nunc ut, eleifend blandit leo. Praesent quis finibus metus. Proin auctor risus nec lacus convallis, iaculis mollis quam porttitor.",
        time: "9:46",
        isSent: false,
      },
      {
        text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin lacus lacus, pretium id augue ac, luctus egestas orci. Nunc vel leo rutrum dui semper eleifend vitae et quam. Vivamus dolor tortor, auctor nec consequat ac, sagittis sed enim. Fusce molestie urna sed quam rhoncus, sit amet vestibulum arcu bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam facilisis sem sem, at pulvinar mauris blandit vitae. Suspendisse sodales mi vitae ante scelerisque molestie. Quisque malesuada elit mi, ut faucibus magna dignissim eu. Nam sem risus, egestas eget nunc ut, eleifend blandit leo. Praesent quis finibus metus. Proin auctor risus nec lacus convallis, iaculis mollis quam porttitor.",
        time: "9:46",
        isSent: false,
      },
    ],
  },
  {
    date: "Вчера",
    messages: [
      {
        text: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории.",
        time: "9:45",
        isSent: true,
      },
      {
        text: "Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так.",
        time: "9:46",
        isSent: false,
      },
    ],
  },
  {
    date: "Сегодня",
    messages: [{ text: "Good morning!", time: "12:00", isSent: true }],
  },
];

export const renderChatsPage = (): string => {
  const compiledTemplate = Handlebars.compile(template);
  return compiledTemplate({ chats, messageGroups });
};
