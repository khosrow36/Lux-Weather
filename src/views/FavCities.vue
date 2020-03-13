<template>
    <div>
        <p v-if="gettingCitiesStatus==0">Ładowanie...</p>
        <p v-else-if="ettingCitiesStatus==-1">Błąd ładowania listy miast</p>
        <input v-else type="text" v-model="search" placeholder="Search">
        <p v-if="addingStatus==-1">Miasto jest już w ulubionych</p>
        <div v-for="city in filteredCities" :key="city.id">
            {{ city.name }} <span v-on:click="addCityToFav(city.id)">+</span><br>
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
        }
    },
    methods: {
        addCityToFav: functions.addCityToFav,
    },
}
</script>