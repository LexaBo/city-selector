import Service from './service.js';

export default class ListCities {
    constructor({element, local, id}) {
        this._element = element;
        this._local = local;
        this._id = id;
        this._getLocation();
    }

    _getLocation() {
        const getCities = (data) => {
            this._render(data);
            $('.cities').on('click', (ev) => {
                if (ev.target.tagName === 'LI') {
                    const li = ev.target;
                    $('#localityText').html(`${li.dataset.location}`);
                    const Event = new CustomEvent("select-location", {
                        bubbles: true,
                    });
                    ev.target.dispatchEvent(Event);
                }
            })
        };
        Service.getLocation((`${this._local}/${this._id}`), getCities);
    }


    _render(loc) {
        if (this._element.querySelector('.cities') === null) {
            const ul = document.createElement('ul');
            ul.className = "cities";
            ul.innerHTML = `
      ${loc.list.map(i => {
                return ` <li data-location = "${i} " data-id = "${loc.id} " class = 'cites-item'>${i}</li>`
            }).join('')}`;
            this._element.appendChild(ul);
        } else {
            $('.cities').html(
                `
      ${loc.list.map(i => {
                    return ` <li data-location = "${i} "  data-id = "${loc.id} " class = 'cites-item'>${i}</li>`
                }).join('')}`)
        }
    }
};
