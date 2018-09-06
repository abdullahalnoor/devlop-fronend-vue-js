<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/includes/Navbar";

export default {
  name: "App",
  components: {
    navbar: Navbar
  }
};
</script>


