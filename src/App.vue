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
        <footer>
            <p>LuxWeather is powered by OpenWetherMap</p>
        </footer>
    </div>
</template>


<style>
html {
    height:100%;
}
body {
    background-color: #2E3440!important;
    min-height:100%;
    position:relative;
}

body::after {
    content: '';
    display: block;
    height: 70px; /* same as footer's height */
}

footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70px;
    background-color: #434C5E;
    padding-top: 20px;
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
.pointer {
	cursor: pointer;
}
</style>
