// this is NOT vuex store
import Vue from "vue";

export const store = Vue.observable({
    cities: {},
    favCities: [753020],
    weather: {},
});

export const functions = {
    getCities() {
        fetch(process.env.VUE_APP_CITIES_URL)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                store.cities = data;
            });
    },
    getWeather(cities) {
        fetch(`https://api.openweathermap.org/data/2.5/group?id=${cities}&units=metric&appid=${process.env.VUE_APP_API_KEY}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                store.weather = data;
            });
    },
    addCityToFav(id) {
        store.favCities.push(id);
    },
    delCityFromFav(cityID) {
        const pos = store.favCities.indexOf(cityID);
        store.favCities.splice(pos, 1);
    },
};
