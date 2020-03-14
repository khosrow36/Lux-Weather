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
            <b-col md="6">
                <b-card-text>Odczuwalna: {{ data.main.feels_like }} °C</b-card-text>
                <b-card-text>Ciśnienie: {{ data.main.pressure }} hPa</b-card-text>
                <b-card-text>Wilgotność: {{ data.main.humidity }}%</b-card-text>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
export default {
    name: 'WeatherInfo',
    props: {
        data: Object,
    },
    methods: {
        timeOfDay() {
            const hour = (new Date()).getHours();
            if(hour <= 17) return 'd';
            else return 'n';
        }
    },
}
</script>