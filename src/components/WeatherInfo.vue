<template>
    <b-card
        class="nord-bg"
        :title="data.name"
        >
        <b-row no-gutters>
            <b-col md="6">
                <i :class="[`owf owf-${data.weather[0].id}-${timeOfDay()} owf-5x`]"></i>
                <b-card-text> {{ data.main.temp }} °C</b-card-text>
            </b-col>
            <b-col md="5">
                <b-card-text>Odczuwalna: {{ data.main.feels_like }} °C</b-card-text>
                <b-card-text>Ciśnienie: {{ data.main.pressure }} hPa</b-card-text>
                <b-card-text>Wilgotność: {{ data.main.humidity }}%</b-card-text>
            </b-col>
            <b-col md="1">
                <p class="h4 mb-2">
                    <b-icon-graph-up
                        v-b-tooltip.hover
                        title="Zmiana wartości w czasie"
                        class="pointer"
                        v-on:click="showGraph()"
                    ></b-icon-graph-up>
                    <b-icon-x-circle
                        v-b-tooltip.hover
                        title="Usuń miasto z ulubionych"
                        class="pointer"
                        v-on:click="delCityFromFav(data.id)"
                    ></b-icon-x-circle>
                </p>
            </b-col>
        </b-row>
        <div v-if="graphClicked==true">
            <h5>Temperatura</h5>
            <Graph :dataArray="tempArray" />
            <h5>Ciśnienie</h5>
            <Graph :dataArray="pressureArray" />
            <h5>Wilgotność</h5>
            <Graph :dataArray="humidityArray" />
        </div>
    </b-card>
</template>

<script>
import { functions } from "../store";
import Graph from "@/components/Graph"

export default {
    name: 'WeatherInfo',
    components: {
        Graph,
    },
    props: {
        data: Object,
    },
    data() {
        return {
            graphClicked: false,
            tempArray: [],
            pressureArray: [],
            humidityArray: [],
        }
    },
    methods: {
        timeOfDay() {
            const hour = (new Date()).getHours();
            if(hour <= 17 && hour >= 5) return 'd';
            else return 'n';
        },
        delCityFromFav(id) {
            functions.delCityFromFav(id);
            this.$forceUpdate();
        },
        showGraph() {
            this.graphClicked === true ? this.graphClicked = false : this.graphClicked = true;
        },
        addToGraph(array,value) {
            if(array.length === 0){
                array.push(value);
                array.push(value);
            }
            else array.push(value);
        },
    },
    beforeUpdate() {
        this.addToGraph(this.tempArray,this.data.main.temp);
        this.addToGraph(this.pressureArray,this.data.main.pressure);
        this.addToGraph(this.humidityArray,this.data.main.humidity);
    },
}
</script>