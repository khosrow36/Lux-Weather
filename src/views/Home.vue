<template>
    <div class="home">
        <p>{{ cities }}</p>
        <button @click="getCities();">Get Cities</button>
    </div>
</template>

<script>
// @ is an alias to /src
import { store, mutations } from "../store";

export default {
    name: 'Home',
    components: {
    },
    computed: {
        cities() {
            return store.cities;
        }
    },
    methods: {
        getCities: mutations.getCities,
    }
}
</script>
