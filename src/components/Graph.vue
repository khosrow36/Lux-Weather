<template>
    <trend
        :data=dataArray
        :gradient="['#88C0D0', '#81A1C1', '#5E81AC']"
        auto-draw
        smooth
        >
    </trend>
</template>
<script>
export default {
    name: 'Graph',
    props: {
        dataArray: Array,
    },
}
</script>