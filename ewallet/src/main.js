import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
    data() {
        return {
            card: [{
                    image: "blockchain",
                    color: "#ffffff",
                    backgroundcolor: "#C93CC9",
                    id: "98312342342",
                    owner: "Rebecka Rider",
                    vendor: "Block Chain",
                    number: "2433 2398 8234 2323",
                    vMonth: "02",
                    vDay: "09",


                },
                {
                    image: "bitcoin",
                    color: "#ffffff",
                    backgroundcolor: "#E7ED2B",
                    id: "9789567432345",
                    owner: "Emanuel Filer",
                    vendor: "bitcoin",
                    number: "4562 5345 3423 5678",
                    vMonth: "01",
                    vDay: "09",

                },
                {
                    image: "ninja",
                    color: "#ffffff",
                    backgroundcolor: "#292829",
                    id: "12938472819283",
                    owner: "Stefan Malki",
                    vendor: "ninja",
                    number: "9284 9384 7463 3432",
                    vMonth: "05",
                    vDay: "12",

                },
                {
                    image: "evil",
                    color: "#ffffff",
                    backgroundcolor: "#AB293A",
                    id: "192837482873821",
                    owner: "Helena Josefsson",
                    vendor: "Evil",
                    number: "9574 9384 3423 2343",
                    vMonth: "10",
                    vDay: "18",

                }
            ]
        }
    },
    methods: {
        newcard(data) {
            this.card.push(data)
        }
    },

    router,
    render: h => h(App)
}).$mount('#app')