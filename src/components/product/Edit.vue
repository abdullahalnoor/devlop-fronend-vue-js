<template>
<div class="container">
   <div class="row justify-content-center">
     <div class="col-md-6">
       <h1>Update Product</h1>
       <form v-on:submit.prevent="updateProduct">
          <div class="form-group">
    <label for="name">Name</label>
    <input type="text" name="name" v-model="form.name" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name">
    
  </div>
  <div class="form-group">
    <label for="dd">Price</label>
    <input type="text" name="price" v-model="form.price" class="form-control" id="dd" aria-describedby="priceHelp" placeholder="Enter price">
    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
  </div>
  <div class="form-group">
    <label for="adsfdds">description</label>
    <textarea  name="description" v-model="form.description" class="form-control" id="adsfdds" placeholder="description"></textarea>
  </div>
 
  <button type="submit" class="btn btn-primary">Update</button>
  <router-link tag="a" class="btn btn-info float-right" to="/feed">Back</router-link>
</form>
     </div>
   </div>
</div>
</template>
<script>
export default {
  name: "product-create",
  data() {
    return {
      form: {}
      // product: {}
    };
  },
  created() {
    this.getProduct();
    // console.log(this.$parent);
  },
  methods: {
    getProduct() {
      this.$http
        .get("api/product/" + this.$route.params.id)
        .then(res => {
          this.form = res.body;
          console.log(res.body);
        })
        .catch(res => {
          this.$toastr("error", res.body.error, res.status);
        });
    },
    updateProduct() {
      this.$http
        .put("api/product/" + this.$route.params.id, this.$data.form)
        .then(res => {
          console.log(res);
          this.form = res.body;
          // this.$parent.products = res.body;
          this.$toastr("success", "Data Updated Successfully ..");
          this.$router.push("/feed");
        });
    }
  }
};
</script>

