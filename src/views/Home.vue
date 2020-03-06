<template>
    <div class="home">
        <p>Count: {{ count }}</p>
        <button @click="setCount(count + 1);">+ 1</button>
        <button @click="setCount(count - 1);">- 1</button>
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
        count() {
            return store.count;
        }
    },
    methods: {
        setCount: mutations.setCount
    }
}
</script>
