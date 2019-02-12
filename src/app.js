import CitySelector from './CitySelector/index.js';

new CitySelector({
    elementId: document.querySelector('#citySelector'),
    regionsUrl: 'http://localhost:3000/regions',
    localitiesUrl: 'http://localhost:3000/localities',
    saveUrl: 'http://localhost:3000/selectedRegions'
});

