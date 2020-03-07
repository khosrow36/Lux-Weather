<template>
    <div>
        {{  }}
        <input type="text" v-model="search" placeholder="Search">
        <div v-for="city in filteredCities" :key="city.id">
            {{ city.name }} <span v-on:click="addCityToFav(city.id)">+</span><br>
        </div>
    </div>
</template>
<script>
import { store, functions } from "../store";

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
        filteredCities() {
            return store.cities.filter((city) => {
                return city.name.toLowerCase().match(this.search.toLowerCase());
            })
        }
    },
    methods: {
        addCityToFav: functions.addCityToFav,
    },
}
</script>