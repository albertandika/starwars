<template>
    <nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">
        <img :src="require('@/assets/logo.svg')" alt="Logo" width="100" height="65">
    </a>
      <ul class="right hide-on-med-and-down">
        <li>
            <router-link :to="{ name: 'List'}">Film</router-link>
        </li>
          <li>
              <router-link :to="{ name: 'Character'}">Character</router-link>
        </li>

      </ul>

      <ul id="nav-mobile" class="sidenav">
         <li>
            <router-link :to="{ name: 'List'}">Film</router-link>
        </li>
          <li>
              <router-link :to="{ name: 'Character'}">Character</router-link>
        </li>
      </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  </nav>
</template>
<script>
export default {
    
}
</script>