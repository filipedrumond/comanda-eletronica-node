<template>
    <div class="">
        <h1>I'M here</h1>
        {{ pratos }}
        <teste v-for="prato in pratos2" v-bind:key="prato.id" :prato="prato">
        </teste>
        {{ pratos2 }}
    </div>
</template>

<script>
import teste from "./components/Teste";
// var component = require("./components/Component")
export default {
    name: "home",
    data() {
        return {
            pratos: [],
            pratos2: []
        };
    },
    created: function() {
        console.log("G");
        this.$http
            .get("http://localhost:510/categorias")
            .then(response => {
                this.pratos = response.body;
                return this.$http.get("http://localhost:510/categorias");
            })
            .then(response => {
                this.pratos2 = response.body;
            });
    },
    components: { teste }
};
</script>

<style>
</style>