<template>
  <div class="row">



        <product   v-for="(item,index)  in products" :key="index" :authenticatedUser="authenticatedUser" :product="item" :category="category" @deleteProduct="deleteProduct(item)">
        
        </product>
  
  </div>
</template>
<script>
import product from "./product";

export default {
  components: {
    product: product
  },
  data() {
    return {
      products: [],
      category: []
    };
  },
  computed: {
    authenticatedUser() {
      return this.$auth.getAuthenticatedUser();
    }
  },
  created() {
    this.$http.get("api/product").then(res => {
      // console.log(res);
      this.products = res.data.product;
      this.category = res.data.category;
    });
  },
  methods: {
    deleteProduct(product) {
      // this.$emit("deleteProduct", product.id);
      this.$http.delete("api/product/" + product.id).then(res => {
        let index = this.products.indexOf(product);
        this.products.splice(index, 1);
        this.$toastr("success", "i am a toastr success", "hello");
      });
    }
  }
};
</script>

