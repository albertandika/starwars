<template>
  <div id="app">
    <div class="overlay" v-if="$store.getters.loading">
            <div class="loading-content">
                <div class="preloader-wrapper big active">
                  <div class="spinner-layer spinner-blue-only">
                    <div class="circle-clipper left">
                      <div class="circle"></div>
                    </div>
                    <div class="gap-patch">
                      <div class="circle"></div>
                    </div>
                    <div class="circle-clipper right">
                      <div class="circle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    <navigation-header />
    <div class="container">
    <div class="section">
        </div>
    <router-view/>
    </div>
  </div>
</template>
<script>
import NavigationHeader from './components/NavigationHeader'
export default {
  components: {
    NavigationHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

.loading-content {
    text-align: center;
    font-size: 32px;
    top: 30%;
    position: absolute;
    width: 100%;
    z-index: 10;
}

.overlay {
  height: 100%;
  width: 100%;
  z-index: 20;
  position: fixed;
  background-color: #eae6e685;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
