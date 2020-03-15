<template>
    <div>
        <b-spinner v-if="gettingCitiesStatus==0" label="Loading..."></b-spinner>
        <p v-else-if="gettingCitiesStatus==-1">Błąd ładowania listy miast</p>
        <b-form-input v-else type="text" v-model="search" placeholder="Szukaj"></b-form-input>
        <b-alert show variant="danger" v-if="addingStatus==-1">Miasto jest już w ulubionych</b-alert>
        <div
            v-for="city in filteredCities"
            :key="city.id"
            class="list"
            v-on:click="addCityToFav(city.id)"
            >
                {{ city.name }}
                <b-badge pill>+</b-badge>
        </div>
    </div>
</template>
<script>
import { store, states, functions } from "../store";

export default {
    name: 'FavCities',
    data() {
        return {
            search: '',
        }
    },
    mounted() {
        functions.getCities();
    },
    computed: {
        gettingCitiesStatus() {
            return states.gettingCities;
        },
        cities() {
            return store.cities;
        },
        addingStatus() {
            return states.addingToFav;
        },
        filteredCities() {
            return Object.values(this.cities).filter((city) => {
                return city.name.toLowerCase().match(this.search.toLowerCase());
            })
        },
        fav() {
            return store.favCities;
        },
    },
    methods: {
        addCityToFav: functions.addCityToFav,
    },
    beforeDestroy() {
        functions.addArrayToLocalStore("favCities", store.favCities);
    },
}
</script>

<style>
.list-group-item {
    background-color: #2E3440;
}
.list {
    width: 100%;
    padding: 0.75rem;
    border: 0.05rem solid black;
    border-radius: 0.25rem;
}
</style>