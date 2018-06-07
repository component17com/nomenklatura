<template>
  <up-template title="Новая позиция" showBackButton class="newPosNomen">
    <div slot="content">
      <el-form :model="form" label-position="top" class="newPosNomenForm">
        <el-form-item>
          <el-input placeholder="Наименование позиции" v-model="values" class="input-with-select">
            <el-select v-model="values" slot="prepend" placeholder="Тип">
              <el-option label="Restaurant" value="Restaurant3"></el-option>
              <el-option label="Order No." value="Restaurant3"></el-option>
              <el-option label="Tel" value="Restaurant5"></el-option>
            </el-select>
            <el-select v-model="values" slot="append" placeholder="Единицы измерения">
              <el-option label="Restaurant" value="Restaurant"></el-option>
              <el-option label="Order No." value="Restaurant1"></el-option>
              <el-option label="Tel" value="Restaurant2"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
      </el-form>
      <div class="newPosNomenTabs">
        <el-tabs type="card">
          <el-tab-pane :label="item.title" v-for="item in tabsItem">
            <div :is="item.component"></div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div slot="footerActions">
      <el-button>Отмена</el-button>
      <el-button type="info">Сохранить и закрыть</el-button>
      <el-button type="primary">Сохранить и добавить еще</el-button>
    </div>
  </up-template>
</template>

<script>
  import character from './tabs/character';
  import barcodes from './tabs/barcodes';
  import fotos from './tabs/fotos';
  import complects from './tabs/complects';
  import direct from './tabs/direct';
  import magazine from './tabs/magazine';
  export default {
    components:{
      character,
      barcodes,
      fotos,
      complects,
      direct,
      magazine
    },
    data(){
      return{
        activeName: 'first',
        values: '',
        form:{},
        tabsItem: [{
          title: "Характеристики",
          component: character,
        },{
          title: "Штрихкоды",
          component: barcodes,
        },{
          title: "Фото",
          component: fotos,
        },{
          title: "Комплектующие",
          component: complects,
        },{
          title: "Яндекс.директ",
          component: direct,
        },{
          title: "Интернет-магазин",
          component: magazine,
        }],
      }
    },
  }
</script>

<style scoped>

</style>
