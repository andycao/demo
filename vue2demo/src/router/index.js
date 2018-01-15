import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import app7 from '@/pages/App7'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: HelloWorld
        }, {
            path: '/app7',
            name: 'componentTest',
            component: app7
        }
    ]
})
