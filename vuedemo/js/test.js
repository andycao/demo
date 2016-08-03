/**
 * Created by andycao on 16/7/12.
 */


define(['vue'], function(vue){
    console.log(vue);
    console.log('hahaha');
    new vue({
        el: '#app',
        data: {
            message: 'Hello Vue.js!'
        }
    })
});