// it is NOT vuex store
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
    }
};
