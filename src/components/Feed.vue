<template>
  <div class="container">
    <h1>Feed</h1>
    <div class="row justify-content-center">
      <my-product/>
    </div>
  </div>
</template>
<script>
import Product from "./product/products";
export default {
  components: {
    "my-product": Product
  },
  created() {},
  methods: {}
};
</script>

