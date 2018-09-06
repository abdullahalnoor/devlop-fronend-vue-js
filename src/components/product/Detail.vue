<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-4">
        <img :src="'http://devlop-backend.com/'+product.image" alt="" class="img-responsive " style="width:200px;height:200px">
      </div>
      <div class="col-md-8">
        <h2> {{ product.name }} </h2>
        <p> {{ product.description }} </p>
      </div>
    </div>
    <div class="row mt-5">
      <ul v-for="(subImage,index) in subImages" :key="index"  >
          <li>
             <img :src="'http://devlop-backend.com/'+subImage.image" alt="" class="img-responsive " style="width:100px;height:100px">
          </li>
      </ul>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      product: {},
      subImages: {}
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      this.$http
        .get("api/product/detail/" + this.$route.params.id)
        .then(res => {
          this.product = res.data.product;
          this.subImages = res.data.subImage;
          // console.log(res.data.subImage);
        });
    }
  }
};
</script>

<style>
</style>
