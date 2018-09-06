<template>
<div class="container">
   <div class="row justify-content-center">
     <div class="col-md-6">
       <h1>Register Form</h1>
       <form>
          <div class="form-group">
    <label for="name">Name</label>
    <input type="email" name="name" v-model="form.name" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name">
    
  </div>
  <div class="form-group">
    <label for="dd">Email address</label>
    <input type="email" name="email" v-model="form.email" class="form-control" id="dd" aria-describedby="emailHelp" placeholder="Enter email">
    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
  </div>
  <div class="form-group">
    <label for="adsfdds">Password</label>
    <input type="password" name="password" v-model="form.password" class="form-control" id="adsfdds" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="adsfdas">
    <label class="form-check-label" for="adsfdas">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
     </div>
   </div>
</div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      }
    };
  }
};
</script>

