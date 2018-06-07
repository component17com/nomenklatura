<template>
  <up-template>
    <div slot="headerButtons">
      <el-input v-model="searchword" suffix-icon="el-icon-search" placeholder="Поиск"></el-input>
    </div>
    <div slot="content">
      <div class="nomenLeft__tree">
        <v-tree ref='tree' :data='nodes' :halfcheck='true' :draggable="true" />
      </div>
    </div>
    <div slot="footer" class="nomenLeft__newCat">
      <el-button type="info" @click="newCat">Добавить новую категорию</el-button>
    </div>
  </up-template>
</template>

<script>
  export default {
    watch: {
      searchword(){
        if(this.searchword.length > 0){
          this.search(true);
        }else{
          this.search(false);
        }
      },
    },
    data() {
      return {
        searchword: '',
        nodes:[],
        treeData: [{
          title: 'Первый уровень Первый уровень Первый уровень Первый уровень Первый уровень',
          children: [{
            title: "Второй уровень",
            children: [{
              title: "Третий уровень",
              children: [{
                title: "Четвертый уровень",
              },{
                title: "Четвертый уровень 2"
              }],
            },{
              title: "Третий уровень 2"
            }],
          },{
            title: "Второй уровень 2"
          }],
        }, {
          title: 'Первый уровень 2'
        }, {
          title: 'Первый уровень 3'
        }, {
          title: 'Первый уровень 4'
        }, {
          title: 'Первый уровень 5',
          children:[{
            title: 'Четвертый уровень в 5'
          }]
        }, {
          title: 'Первый уровень 6'
        }, {
          title: 'Первый уровень 77'
        }]
      }
    },
    created(){
      this.nodes = this.treeData;
    },
    methods:{

      search(type) {
        this.$refs.tree.searchNodes(this.searchword);
        this.expanded(this.$refs.tree.data, type)
      },

      expanded(data, type){
        for(let index in data){
          if(data[index].children){
            data[index].expanded = type;
            this.expanded(data[index].children, type)
          }
        }
      },

      newCat (){
        this.$prompt('Наименование', 'Создание категории', {
          confirmButtonText: 'Создать',
          cancelButtonText: 'Отмена',
        }).then(value => {

        }).catch(() => {

        });
      },
    },

  }
</script>

<style scoped>

</style>
