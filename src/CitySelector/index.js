import ButtonSelect from './button-select';
import ListRegion from './list-region';
import ListCities from './list-cities';
import ButtonSave from './button-save';
import Service from './service.js';

require('./style.less');

export default class CitySelector {
    constructor({elementId, regionsUrl, localitiesUrl, saveUrl}) {
        this._element = elementId;
        this._regions = regionsUrl;
        this._local = localitiesUrl;
        this._save = saveUrl;
        $('#createCitySelector').on("click", (ev) => this._create(ev));
        $('#destroyCitySelector').on("click", () => this._destroy());
        $(this._element).on("select-region", (ev) => this._selectRegion(ev));
        $(this._element).on("select-location", () => this._selectLocation());
        $('#clear').on('click', () => Service.getLocation(this._save, Service.deleteLocation))
    }


    _selectLocation() {
        const $buttonSave = $('.button-save');
        if ($buttonSave) {
            $buttonSave.detach();
        }
        this._createButtonSave();
    }

    _selectRegion(ev) {
        const $cities = $('.cities');
        if ($cities) {
            $cities.empty();
        }
        this._createListCites(ev.detail);
        const localText = $('#localityText');
        if (localText.html() !== '') {
            localText.empty();
            $('.button-save').prop('disabled', true);

        }
    }

    _create(e) {
        $('#info').show();
        this._createButton();
        e.target.disabled = true;
    }

    _destroy() {
        $('#button-select').detach();
        $('#info').hide();
        $('#localityText').empty();
        $('#regionText').empty();
        $('.button-save').detach();
        $('.cities').detach();
        $('.regions').detach();
        $('#createCitySelector').prop('disabled', false);
    }

    _createButton() {
        new ButtonSelect({
            element: this._element,
        });
        $('#button-select').on('click', () => {
            this._createListRegion();
        })
    }

    _createListRegion() {
        new ListRegion({
            element: this._element,
            regions: this._regions,
        });
    }

    _createListCites(id) {
        new ListCities({
            element: this._element,
            local: this._local,
            id: id,
        });
    }

    _createButtonSave() {
        new ButtonSave({
            element: this._element,
        });

        $('.button-save').on('click', () => {
            const region = $('#regionText').html();
            const cities = $('#localityText').html();
            Service.postLocation(this._save, region, cities);
        })
    }

};
