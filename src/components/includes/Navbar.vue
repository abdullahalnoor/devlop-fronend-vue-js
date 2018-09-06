<template>
<div class="container">


    <ul class="nav justify-content-end">
     
      <li class="nav-item">
          <router-link tag="a" class="nav-link " to="/login" v-if="!isAuth"> Login</router-link>
      </li>
      <li class="nav-item">
          <router-link tag="a" class="nav-link" to="/register" v-if="!isAuth"> Register</router-link>
      </li>
      <li class="nav-item">
          <router-link tag="a" class="nav-link" to="/feed" v-if="isAuth">Home </router-link>
      </li>
       <li class="nav-item">
          <router-link tag="a" class="nav-link" to="/category" v-if="isAuth">Category </router-link>
      </li>
       <li class="nav-item">
          <router-link tag="a" class="nav-link" to="/product/create" v-if="isAuth">Create </router-link>
      </li>
       <li class="nav-item" v-for="(cat,index) in category" :key="index"  v-if="isAuth">
        <router-link tag="a" class="nav-link" :to="{ name: 'categoryProduct',params:{id:cat.id,type:cat.name}}">
          {{ cat.name }}
        </router-link>
       <li class="nav-item">
          <a  class="nav-link"  v-if="isAuth" @click="logout">Logout </a>
      </li>
      
  </ul>





</div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      isAuth: null,
      category: {}
    };
  },
  created() {
    this.isAuth = this.$auth.isAuthenticated();
    this.setAuthenticatedUser();

    this.getCategory();
  },
  methods: {
    getCategory() {
      this.$http.get("api/category").then(res => {
        this.category = res.data;
        console.log(this.category);
      });
    },
    setAuthenticatedUser() {
      this.$http.get("api/user").then(res => {
        //  let userName = res.body.name;
        this.$auth.setAuthenticatedUser(res.body);
        // console.log(this.$auth.getAuthenticatedUser());
      });
    },
    logout() {
      this.$auth.destroyToken();
      this.isAuth = null;
      this.$router.push("/login");
    }
  }
};
</script>

<style>
/* .router-link-active {
  background-color: peru;
  color: #ffffff;
} */
</style>