<template>
    <div class="home">
        <p>{{ weather }}</p>
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
        }
    },
    methods: {
        getCities: functions.getCities,
        getWeaher: functions.getWeather,
    }
}
</script>
