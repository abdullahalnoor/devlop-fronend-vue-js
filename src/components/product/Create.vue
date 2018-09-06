<template>
<div class="container">
   <div class="row justify-content-center">
     <div class="col-md-6">
       <h1>Create Product</h1>
       <form v-on:submit.prevent="createProduct">
          <div class="form-group">
    <label for="name">Name</label>
    <input type="text" name="name" v-model="form.name" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name">
     <small id="emailHelp" class="form-text font-weight-bold text-danger" v-if="errors.name">
      {{ errors.name[0] }}
    </small>
  </div>
  <div class="form-group">
    <label for="dd">Price</label>
    <input type="text" name="price" v-model="form.price" class="form-control" id="dd" aria-describedby="priceHelp" placeholder="Enter price">
    <small id="emailHelp" class="form-text font-weight-bold text-danger" v-if="errors.price">
      {{ errors.price[0] }}
    </small>
  </div>
  <div class="form-group">
    <label for="">Select Category</label>
    <select name="cate" v-model="form.category_id" id="" class="form-control">
        <option v-for="(cat,index) in category" :key="index"   v-bind:value="cat.id">
        {{ cat.name  }}
      </option>
      
    </select>
  </div>
  <div class="form-group">
    <label for="adsfdds">description</label>
    <textarea  name="description" v-model="form.description" class="form-control" id="adsfdds" placeholder="description"></textarea>
     <small id="emailHelp" class="form-text font-weight-bold text-danger" v-if="errors.description">
      {{ errors.description[0] }}
    </small>
  </div>
  <div class="form-group">
    <label for="dd">image</label>
    <input type="file" name="image" @change="fileUpload" class="form-control" id="dd" aria-describedby="imageHelp" placeholder="Enter image">
    <small id="emailHelp" class="form-text font-weight-bold text-danger" v-if="errors.image">
      {{ errors.image[0] }}
    </small>
  </div>

   <div class="form-group">
    <label for="dd">images (one more)</label>
    <input type="file" name="images[]" multiple  @change="multiFileUpload" class="form-control" id="dd" aria-describedby="imageHelp" placeholder="Enter image">
    <small id="emailHelp" class="form-text font-weight-bold text-danger" v-if="errors.image">
      {{ errors.image[0] }}
    </small>
  </div>
  <button type="submit" class="btn btn-primary float-right">Create</button>
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
      form: {
        category_id: "",
        name: "",
        description: "",
        price: "",
        image: "",
        multiImgFiles: []
      },
      category: {},

      frmFata: new FormData(),
      errors: {}
    };
  },
  created() {
    this.getCategory();
  },
  methods: {
    getCategory() {
      this.$http.get("api/published/category").then(res => {
        console.log(res.body);
        this.category = res.body;
      });
    },
    fileUpload(e) {
      let firstImage = e.target.files[0];
      this.$data.form.image = firstImage;
    },
    multiFileUpload(e) {
      let selectedFiles = e.target.files;
      if (!selectedFiles.length) {
        return false;
      }
      for (let i = 0; i < selectedFiles.length; i++) {
        this.$data.form.multiImgFiles.push(selectedFiles[i]);
      }
      console.log(this.$data.form.multiImgFiles);
    },
    createProduct() {
      this.frmFata.append("category_id", this.$data.form.category_id);
      this.frmFata.append("image", this.$data.form.image);
      this.frmFata.append("name", this.$data.form.name);
      this.frmFata.append("price", this.$data.form.price);
      this.frmFata.append("description", this.$data.form.description);

      for (let i = 0; i < this.$data.form.multiImgFiles.length; i++) {
        this.frmFata.append("images[]", this.$data.form.multiImgFiles[i]);
      }
      console.log(this.frmFata);
      // this.frmFata.append("form", this.$data.form);
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      this.$http
        .post("api/product", this.frmFata, config)
        .then(res => {
          console.log(res);
          this.$data.form = "";
          this.$toastr("success", "Product Info saved successfully..");
          this.$router.push("/feed");
          // this.$route.push("/feed");
        })
        .catch(err => {
          console.log(err.data.errors);
          this.errors = err.data.errors;
        });
    }
  }
};
</script>

