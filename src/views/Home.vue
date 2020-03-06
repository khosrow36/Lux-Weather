<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <p>Count: {{ count }}</p>
        <button @click="setCount(count + 1);">+ 1</button>
        <button @click="setCount(count - 1);">- 1</button>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { store, mutations } from "../store";

export default {
    name: 'Home',
    components: {
        HelloWorld
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
