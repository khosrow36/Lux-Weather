// this is NOT vuex store
import Vue from "vue";

export const store = Vue.observable({
    cities: null,
});

export const mutations = {
    getCities() {
        fetch(process.env.VUE_APP_CITIES_URL)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                store.cities=data;
            });
    },
    getWeather(city) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?id=${city}&units=metric&appid=${process.env.VUE_APP_API_KEY}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    }
};
