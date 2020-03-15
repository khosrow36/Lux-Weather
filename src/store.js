// this is NOT vuex store
import Vue from "vue";

export const store = Vue.observable({
    cities: {},
    favCities: [759734],
    weather: {},
    errorMSG: "",
});

export const states = Vue.observable({
    gettingWeather: 0,
    gettingCities: 0,
    addingToFav: 0,
});

export const functions = {
    getCities() {
        states.gettingCities = 0;
        fetch(process.env.VUE_APP_CITIES_URL)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                store.cities = data;
                states.gettingCities = 1;
            })
            .catch((error) => {
                states.gettingCities = -1;
                store.errorMSG = error;
            });
    },
    getWeather(cities) {
        states.gettingWeather = 0;
        fetch(`https://api.openweathermap.org/data/2.5/group?id=${cities}&units=metric&appid=${process.env.VUE_APP_API_KEY}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                store.weather = data;
                states.gettingWeather = 1;
            })
            .catch((error) => {
                states.gettingWeather = -1;
                store.errorMSG = error;
            });
    },
    addCityToFav(id) {
        if(store.favCities.find((element) => {
            return element === id
        }) == undefined)
        {
            store.favCities.push(id);
            states.addingToFav = 1;
        }
        else {
            states.addingToFav = -1;
        }
    },
    delCityFromFav(cityID) {
        const pos = store.favCities.indexOf(cityID);
        store.favCities.splice(pos, 1);
    },
    addArrayToLocalStore(name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    },
    readArrayFromLocalStorage(name) {
        return JSON.parse(localStorage.getItem(name));
    },
};
