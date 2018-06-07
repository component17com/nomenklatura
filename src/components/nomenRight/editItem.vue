<template>
  <up-template title="Внутренний лоток для подачи этикеток Z-сложения Zebra 105SL" showBackButton class="newPosNomen">
    <div slot="headerButtons">
      <el-button @click="edits"><i class="mdi mdi-pencil"></i></el-button>
      <el-button><i class="mdi mdi-delete"></i></el-button>
    </div>
    <div slot="content">
      <div v-if="edit === true" class="editPosNomenInfo">
        <div class="editPosNomenInfo__row">
          <div class="editPosNomenInfo__row-text">Код:</div>
          <div class="editPosNomenInfo__row-input">
            000002
          </div>
        </div>
        <div class="editPosNomenInfo__row">
          <div class="editPosNomenInfo__row-text">Тип:</div>
          <div class="editPosNomenInfo__row-input">
            <el-radio label="1">Option A</el-radio>
            <el-radio label="2">Option B</el-radio>
          </div>
        </div>
        <div class="editPosNomenInfo__row">
          <div class="editPosNomenInfo__row-text">Название позиции:</div>
          <div class="editPosNomenInfo__row-input">
            <el-input placeholder="Внутренний лоток для подачи этикеток Z-сложения Zebra 105SL "></el-input>
          </div>
        </div>
        <div class="editPosNomenInfo__row">
          <div class="editPosNomenInfo__row-text">Единицы измерения:</div>
          <div class="editPosNomenInfo__row-input">
            <el-select>
              <el-option value="шт" label="шт"></el-option>
              <el-option value="киллограмм" label="киллограмм"></el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div v-else class="editPosNomenInfo">
        <div class="editPosNomenInfo__row" v-for="item in infoItems">
          <div class="editPosNomenInfo__row-text">{{item.title}}:</div>
          <div class="editPosNomenInfo__row-input">{{item.info}}</div>
        </div>
      </div>
      <div class="editPosNomenTabs">
        <el-tabs type="card">
          <el-tab-pane :label="item.title" v-for="item in tabsItem">
            <div :is="item.component"></div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div slot="footerActions" v-if="edit === true">
      <el-button @click="edits">Отмена</el-button>
      <el-button type="primary">Сохранить</el-button>
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
        edit: false,
        infoItems:[{
          title: 'Код',
          info: '000002',
        },{
          title: 'Тип',
          info: 'Товар',
        },{
          title: 'Название позиции',
          info: 'Внутренний лоток для подачи этикеток Z-сложения Zebra 105SL ',
        },{
          title: 'Единицы измерения',
          info: 'шт',
        }],
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
    methods: {
      edits(){
        this.edit = !this.edit
      }
    }
  }
</script>

<style lang="scss">
  .editPosNomenInfo__row{
    display: flex;
    align-items: center;
    height: 28px;
    min-height: 28px;
    margin-bottom: 18px;
    &-text{
      width: 150px;
      color: #515254;
      font-size: 12px;
    }
    &-input{
      color: #263238;
      font-size: 12px;
      font-weight: 500;
    }
    &-input:not(&-input > .el-select){
      width: 580px;
    }
  }
</style>
