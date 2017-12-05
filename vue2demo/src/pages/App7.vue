<template>
    <div id="app-7">
        <ol>
            <TodoItem
                    v-for="item in groceryList"
                    v-bind:todo="item"
                    v-bind:key="item.id">
            </TodoItem>
        </ol>
    </div>
</template>

<script>
    import TodoItem from '@/components/TodoItem'

    export default {
        name: 'app7',
        components: {TodoItem},
        data () {
            return {
                groceryList: [
                    {id: 0, text: '蔬菜'},
                    {id: 1, text: '奶酪'},
                    {id: 2, text: '随便其他什么人吃的东西'}
                ]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
