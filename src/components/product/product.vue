<template>

<div class="col-sm-4">
  
  <div class="card">
      <div class="card-header">
        {{product.name }} 
        
      </div>
      <div class="card-body">
        <img :src="'http://devlop-backend.com/'+product.image" alt="" class="img-responsive " style="width:100px;height:100px">
        <br>
        {{text_truncate(product.description,50) }}
      </div>
      <div class="card-footer">
        {{ product.price }} Tk,<router-link tag="a" class="btn btn-info" :to="'/product/detail/'+ product.id + '/'+ product.name">View Details</router-link> <a class="btn btn-primary">Add Cart</a>
        <a class="btn btn-danger" v-if="authenticatedUser.id == product.user_id" @click="$emit('deleteProduct')">Delete</a>
        <router-link tag="a" class="btn btn-warning" v-if="authenticatedUser.id == product.user_id" :to="'/product/'+product.id+'/edit'">Edit</router-link>
      </div>
    </div>
</div>

    
  
</template>
<script>
export default {
  props: ["product", "category", "authenticatedUser"],
  data() {
    return {
      cart: []
    };
  },
  computed: {},

  methods: {
    text_truncate(str, length, ending) {
      if (length == null) {
        length = 100;
      }
      if (ending == null) {
        ending = "...";
      }
      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
      } else {
        return str;
      }
    }

    // deleteProduct(product) {
    //   this.$emit("deleteProduct", product);
    //   // this.$http.delete("api/product/" + product.id).then(res => {
    //   //   this.$toastr("success", "i am a toastr success", "hello");
    //   // });
    // }
  }
};
</script>
