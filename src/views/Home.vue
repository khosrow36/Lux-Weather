<template>
    <div class="home">
        <p>{{ favCities }}</p>
        <div v-for="single in weather.list" :key=single.id>
            <weather-info :data="single"></weather-info>
        </div>
        <button @click="generateCitiesString();">Get Cities</button>
        <button @click="getWeaher();">Get Weather</button>
    </div>
</template>

<script>
// @ is an alias to /src
import { store, functions } from "../store";
import WeatherInfo from "@/components/WeatherInfo";

export default {
    name: 'Home',
    components: {
        WeatherInfo
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
            functions.getWeather(cities);
        },
    }
}
</script>
