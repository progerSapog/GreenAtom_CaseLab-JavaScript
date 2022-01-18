// опишите класс Collapser
class Collapser {
    constructor(text) {
        this.text = text;

        this.init()
    }

    init() {
        this.spoilers = document.body.querySelectorAll(`.${this.text}`)
        this.attachEvents()

    }

    attachEvents() {
        this.spoilers.forEach(spoiler => spoiler.addEventListener('click', Collapser.#showContent))
    }

    static #showContent(event)
    {
        event.target.nextElementSibling.style.display = 'block'

        event.target.removeEventListener('click', Collapser.#showContent)
        event.target.addEventListener('click', Collapser.#hideContent)

    }

    static #hideContent(event) {
        event.target.nextElementSibling.style.display = 'none'

        event.target.removeEventListener('click', Collapser.#hideContent)
        event.target.addEventListener('click', Collapser.#showContent)
    }
}
