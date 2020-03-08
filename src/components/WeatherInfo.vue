<template>
    <div>
        {{ data }} <br>
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