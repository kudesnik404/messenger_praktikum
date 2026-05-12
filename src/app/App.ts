export class App {
    constructor(private root: Element) {
        this.render()
    }

    render() {
        this.root.innerHTML = `
      <div>
        <h1>Messenger App</h1>
      </div>
    `
    }
}