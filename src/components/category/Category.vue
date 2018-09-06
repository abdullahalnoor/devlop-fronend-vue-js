<template>
  <div>
    <div class="row justify-content-center">
      <div class="float-right">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Creatae category
        </button>
      </div>

      <div class="col-md-8">

        <ul class="list-group">
          <li class="list-group-item" v-for="(item,index) in category" :key="index"> {{item.name}} <span class="badge badge-info "> {{ item.status == 0 ?'Unpublishe ':'Published' }} </span>
          <span class="float-right">
             <button type="button"  @click="delCat(item)" class="btn btn-danger" >Delete</button>
             <button type="button"  @click="eidtCat(item)" class="btn btn-primary" data-toggle="modal" data-target="#editModal">
          Edit 
        </button>
        
            </span> </li>
         
        </ul>
      </div>


    </div>
        <create-modal></create-modal>
        <edit-modal :catItem="editItem"></edit-modal>
  </div>
</template>

<script>
import CreateModal from "../category/Create";
import EditModal from "../category/Edit";
export default {
  components: {
    "create-modal": CreateModal,
    "edit-modal": EditModal
  },
  data() {
    return {
      category: {},
      editItem: {}
    };
  },
  created() {
    this.getCategory();
  },
  methods: {
    getCategory() {
      this.$http.get("api/category").then(res => {
        this.category = res.data;

        console.log(this.category);
      });
    },
    eidtCat(item) {
      console.log(item);
      this.editItem = item;
    },
    delCat(item) {
      this.$http.delete("api/category/" + item.id).then(res => {
        let index = this.category.indexOf(item);
        this.category.splice(index, 1);
      });
    }
  }
};
</script>

<style>
</style>
