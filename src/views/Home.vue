<template>
    <div class="home">
        <p>{{ favCities }}</p>
        <button @click="getCities();">Get Cities</button>
        <button @click="getWeaher(752968);">Get Weather</button>
    </div>
</template>

<script>
// @ is an alias to /src
import { store, functions } from "../store";

export default {
    name: 'Home',
    components: {
    },
    computed: {
        weather() {
            return store.weather;
        },
        favCities() {
            return store.favCities;
        },
    },
    methods: {
        getCities: functions.getCities,
        getWeaher: functions.getWeather,
    }
}
</script>
