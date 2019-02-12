export default class ButtonSave {
    constructor({element}) {
        this._element = element;
        this._render();
    }

    _render() {
        if (this._element.querySelector('.button-save') === null) {
            const button = document.createElement('button');
            button.className = "button-save";
            button.innerHTML = 'Сохранить';
            this._element.appendChild(button);
        } else {
            $('.button-save').html('Сохранить').prop('disabled', false);
        }

    }
}
