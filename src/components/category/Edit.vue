<template>
 

<!-- Modal -->
<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form >
          <div class="form-group">
            <label for="">Name</label>
            <input type="text" v-model="catItem.name" class="form-control" name="name">
          </div>
          <div class="form-group">
            <label for="">Status</label>
            <select v-model="catItem.status" name="" id="" class="form-control">
              <option selected>Select One</option>
              <option value="1">Published</option>
              <option value="0">Unpublished</option>
            </select>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <input type="submit"  value="Update" @click="updateRecord" class="btn btn-primary">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ["catItem"],
  methods: {
    updateRecord() {
      this.$http
        .put("api/category/" + this.catItem.id, this.catItem)
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style>
</style>
