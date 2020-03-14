<template>
    <div id="app">
        <b-navbar toggleable="lg" type="dark" style="background-color: #434C5E">
            <b-container>
                <b-navbar-brand href="#">LuxWeather</b-navbar-brand>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item to="/">Pogoda</b-nav-item>
                        <b-nav-item to="/fav-cities">Miasta</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
        <b-container>
            <router-view/>
        </b-container>
    </div>
</template>


<style>
html {
    background-color: #2E3440;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #2E3440;
    color: #ECEFF4;
}
.nord-bg {
    background-color: #2E3440 !important;
}
</style>
