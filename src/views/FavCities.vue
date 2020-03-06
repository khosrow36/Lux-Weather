<template>
    <div>
        <input type="text" v-model="search" placeholder="Szukajka">
        <div v-for="city in filteredCities" :key="city.id">
            {{ city.name }}<br>
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
        filteredCities: function() {
            return store.cities.filter((city) => {
                return city.name.toLowerCase().match(this.search.toLowerCase());
            })
        }
    },
}
</script>