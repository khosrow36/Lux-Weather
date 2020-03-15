<template>
    <div class="home">
        <b-spinner v-if="gettingWeatherInfo==0" label="Loading..."></b-spinner>
        <p v-else-if="gettingWeatherInfo==-1">Błąd ładowania</p>
        <div v-for="single in weather.list" :key=single.id>
            <weather-info :data="single"></weather-info>
        </div>
        <p>Ostatnia aktualizacja: {{ date }}</p>
    </div>
</template>

<script>
// @ is an alias to /src
import { store, states, functions } from "../store";
import WeatherInfo from "@/components/WeatherInfo";

export default {
    name: 'Home',
    components: {
        WeatherInfo
    },
    data() {
        return {
            date: '',
        }
    },
    computed: {
        weather() {
            return store.weather;
        },
        favCities() {
            return store.favCities;
        },
        gettingWeatherInfo() {
            return states.gettingWeather;
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
            this.date = (new Date).toLocaleTimeString('pl-PL', { hourCycle: 'h23' });
        },
    },
    mounted() {
        this.getWeaher();
        window.setInterval(this.getWeaher, 120000);
    }
}
</script>
