<template>
 

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Create Category</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form >
          <div class="form-group">
            <label for="">Name</label>
            <input type="text" v-model="form.name" class="form-control" name="name">
          </div>
          <div class="form-group">
            <label for="">Status</label>
            <select v-model="form.status" name="" id="" class="form-control">
              <option selected>Select One</option>
              <option value="1">Published</option>
              <option value="0">Unpublished</option>
            </select>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <input type="submit" @click="addRecord" value="Create" class="btn btn-primary">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        status: ""
      }
    };
  },
  methods: {
    addRecord() {
      // console.log("dd");
      this.$http
        .post("api/category", this.$data.form)
        .then(res => {
          console.log(res);
          this.form = "";
          this.$parent.category.push(res.data);
          this.$toastr("success", "Info Added Successfully...");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>
