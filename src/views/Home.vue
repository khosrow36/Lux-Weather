<template>
    <div class="home">
        <p>{{ favCities }}</p>
        <p>{{ weather }}</p>
        <button @click="generateCitiesString();">Get Cities</button>
        <button @click="getWeaher();">Get Weather</button>
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
        generateCitiesString() {
            let array = store.favCities;
            let string = '';
            array.forEach((element)=>{
                string = string.concat(`${element},`);
            })
            string = string.slice(0, -1);

            return string;
        },
        getWeaher() {
            let cities = this.generateCitiesString();
            console.log(cities);
            functions.getWeather(cities);
        },
    }
}
</script>
