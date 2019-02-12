import Service from './service.js';

export default class ListRegion {
    constructor({element, regions}) {
        this._element = element;
        this._regions = regions;
        this._getLocation();
    }


    _getLocation() {
        const getRegion = (data) => {
            this._render(data);
            $('.regions').on('click', (ev) => {
                if (ev.target.tagName === 'LI') {
                    const li = ev.target;
                    $('#regionText').html(`${li.dataset.reg}`);
                    const Event = new CustomEvent("select-region", {
                        bubbles: true,
                        detail: li.dataset.reg
                    });
                    ev.target.dispatchEvent(Event);
                }
            })
        };

        Service.getLocation(this._regions, getRegion);
    }

    _render(loc) {
        this._element.innerHTML = `
        <ul class="regions">
      ${loc.map(i => {
            return ` <li data-reg='${i.id}' class = 'regions-item'>${i.title}</li>`
        }).join('')}
      </ul>`;
    }
};
