import Vue from 'vue';
import App from './App';

// new Vue({
//     el: '#app',
//     render(createElement) {
//         return createElement(App)
//     }
// })
// new Vue({
//     el: '#app',
//     render(createElement) {
//         return createElement(App)
//     }
// }).$mount("#app")
new Vue({
    render: createElement => createElement(App)
}).$mount("#app")