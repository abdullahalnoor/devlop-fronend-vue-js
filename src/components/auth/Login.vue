<template>
<div class="container">
   <div class="row justify-content-center">
     <div class="col-md-6">
       <h2>Login  Form</h2>
       <form v-on:submit.prevent="loginSubmit">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name="email" v-model="form.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
  </div>
  <div class="form-group">
    <label for="gg">Password</label>
    <input type="password" name="password" v-model="form.password" class="form-control" id="gg" autocomplete="off" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="ff">Check me out</label>
  </div>
  <button type="submit"  class="btn btn-primary">Submit</button>
</form>
     </div>
   </div>
</div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  created() {
    this.isAuth = this.$auth.isAuthenticated();
    this.setAuthenticatedUser();
  },
  methods: {
    loginSubmit() {
      var data = {
        client_id: 2,
        client_secret: "J8emY6FxdJSASghyf8GRAUxoeNH5mvMqj3Hh8ixp",
        grant_type: "password",
        username: this.form.email,
        password: this.form.password
      };

      this.$http
        .post("oauth/token", data)
        .then(res => {
          console.log(res);
          this.$auth.setToken(
            res.body.access_token,
            res.body.expires_in + Date.now()
          );
          this.$router.push("/feed");
        })
        .catch(err => {
          console.log(err);
        });
    },
    setAuthenticatedUser() {
      this.$http.get("api/user").then(res => {
        //  let userName = res.body.name;
        this.$auth.setAuthenticatedUser(res.body);
        // console.log(this.$auth.getAuthenticatedUser());
      });
    }
  }
};
</script>

