<template>
    <div class="">
        <h1>I'M here</h1>
        {{ pratos }}
        <teste />
        <teste />
        <teste />
    </div>
</template>

<script>
import teste from "./components/Teste";
// var component = require("./components/Component")
export default {
    name: "home",
    data() {
        return {
            pratos: []
        };
    },
    created: function() {
        console.log(this.$http.get("http://localhost:510/categorias"));
        this.$http.get("http://localhost:510/categorias").then(response => {
            this.pratos = response.body;
        });
    },
    components: { teste }
};
</script>

<style>
</style>