export default class ButtonSelect {
    constructor({element}) {
        this._element = element;
        this._render();
    }

    _render() {
        this._element.innerHTML = '<button id="button-select">Выберите регион</button>'
    }
}
