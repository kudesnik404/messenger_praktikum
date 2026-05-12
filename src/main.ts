import { App } from './app/App'
// import './styles/main.scss' /Когда будут стили

const root = document.querySelector('#app')

if (root) {
    new App(root)
}