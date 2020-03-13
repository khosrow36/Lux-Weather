<template>
    <div>
        <div>{{ data.name }}</div>
        <div>
            Temperatura: {{ data.main.temp }}
        </div>
        {{ data }}
    </div>
</template>

<script>
export default {
    name: 'WeatherInfo',
    props: {
        data: Object,
    }
}
</script>