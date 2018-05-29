var vue = new Vue({
    el: '#app',
    data: { 
        lostPhone: 0,
        resetDate: Date.now(),
    },
    created: function() {
        this.get();
    },
    computed: {
        humanReset: function() {
            return new Date(this.resetDate).toString();
        }
    },
    methods: {
        add: function(){
            axios.get("/add").then(response => {
                this.lostPhone = response.data.asks;
            });
        },
        reset: function(){
            axios.get("/reset").then(response => {
                this.lostPhone = response.data.asks;
                this.resetDate = response.data.reset;
            });
        },
        get: function(){
            axios.get("/current").then(response => {
                this.lostPhone = response.data.asks;
                this.resetDate = response.data.reset;
            });
        },
    },
});
