<template>
    <li>{{todo.text}}</li>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                default: {}
            }
        },
        name: 'todo-item'
    }
</script>

<style scoped>

</style>
