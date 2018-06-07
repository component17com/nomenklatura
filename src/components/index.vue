<template>
  <up-template title="Номенклатура">
    <div slot="headerButtons">
      <div class="nomenHeadButtons">
        <el-input placeholder="Поиск по номенклатуре">
          <el-select slot="prepend" placeholder="В выбранной категории ">
            <el-option label="Restaurant" value="1"></el-option>
            <el-option label="Order No." value="2"></el-option>
            <el-option label="Tel" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="success">Импорт</el-button>
        <el-button type="success">Экспорт</el-button>
      </div>
    </div>
    <div slot="content">
      <div class="nomenWrapper">
        <div id="one" class="nomenLeft">
          <nomenLeftTree></nomenLeftTree>
        </div>
        <div id="two" class="nomenRight">
          <nomenRightEmpty v-if="false"></nomenRightEmpty>

          <nomenRightItem v-if="false"></nomenRightItem>

          <nomenRightNewItem v-if="false"></nomenRightNewItem >

          <nomenRightEditItem></nomenRightEditItem>

        </div>
      </div>
    </div>
  </up-template>
</template>

<script>
  import nomenLeftTree from './nomenLeft/tree';
  import nomenRightEmpty from './nomenRight/emptyCut';
  import nomenRightItem from './nomenRight/item';
  import nomenRightNewItem from './nomenRight/newItem';
  import nomenRightEditItem from './nomenRight/editItem';
  export default {
    components:{
      nomenLeftTree,
      nomenRightEmpty,
      nomenRightItem,
      nomenRightNewItem,
      nomenRightEditItem,
    },
    mounted(){
      this.$split(['#one', '#two'], {
        sizes: [25, 75],
        minSize: [260, 650],
        gutterSize: 8,
      })
    },
  }
</script>
<style lang="scss">
  * {
    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      width: 6px;
      background: #cccccc;
      border-radius: 3px;
    }

    &::-webkit-scrollbar-track {
      width: 6px;
      background: #eceff1;
      cursor: pointer;
    }
  }
  .nomenHeadButtons{
    width: 800px;
    display: flex;
    .el-input--suffix{
      width: 190px;
    }
  }
  .nomenWrapper{
    display: flex;
    flex-grow: 2;
    .nomenLeft{
      display: flex;
      flex-direction: column;
      .card__header{
        border-right: 1px solid #cccccc;
        .card__header-buttons{
          margin-left: 0;
          width: 100%;
          div, input{
            width: 100%;
          }
        }
      }
      .card__body{
        border-right: 1px solid #cccccc;
      }
      .nomenLeft__tree{
        display: flex;
        flex-direction: column;
        flex-grow: 2;
        overflow-y: auto;
        padding: 10px 5px;
        .halo-tree{
          margin: 0;
        }
      }
      .nomenLeft__newCat{
        button{
          display: flex;
          width: 100%;
          justify-content: center;
        }
      }
      .card__footerWrapper{
        border-right: 1px solid #cccccc;
      }
    }
    .nomenRight{
      display: flex;
      flex-direction: column;
      .nomenRight__empty{
        display: flex;
        flex-direction: column;
        flex-grow: 2;
        align-items: center;
        justify-content: center;
        &-content{
          text-align: center;
          width: 200px;
          p{
            font-size: 12px;
            line-height: 1.5;
            color: #888888;
          }
          button{
            margin-top: 15px;
          }
        }
      }
      .catNomen-wrapper{
        display: flex;
        flex-direction: column;
        flex-grow: 2;
        padding: 0 10px 10px 10px;
        .catNomen__header{
          display: flex;
          align-items: center;
          padding: 10px 0;
          height: 28px;
          min-height: 28px;
          &-buttons:last-child{
            margin-left: auto;
          }
        }
        .catNomen__table{
          flex-grow: 2;
          display: flex;
          flex-direction: column;
          & > div{
            overflow-y: auto;
          }
        }
      }
    }
    .cell{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      button{
        color: #909399;
        i{
          margin-right: 5px;
        }
        &:hover{
          color: #263238;
        }
        &:focus{
          color: #263238;
        }
      }
    }
    .newPosNomen{
      & > .card__body {
        padding: 10px;
      }
    }
    .newPosNomenForm{
      margin-bottom: 7px;
      .el-input-group__append{
        background-color: transparent;
      }
      .el-select .el-input {
        width: 180px;
      }
    }
    .editPosNomenTabs, .newPosNomenTabs{
      display: flex;
      flex-direction: column;
      flex-grow: 2;
      .el-tabs{
        display: flex;
        flex-direction: column;
        flex-grow: 2;
        .el-tabs__content{
          display: flex;
          flex-direction: column;
          flex-grow: 2;
          div{
            overflow-y: auto;
          }
        }
      }
    }

  }
  /*----СПЛИТ----*/
  .gutter-horizontal{
    cursor: col-resize;
    border-right: 1px solid #cccccc;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &:before{
      position: absolute;
      content: "\F1D9";
      color: #cccccc;
      display: inline-block;
      font: normal normal normal 24px "Material Design Icons";
      font-size: inherit;
      text-rendering: auto;
      line-height: inherit;
    }
  }
  .catNomen__table .el-table .el-table-column--selection .cell{
    padding-left: 0;
    padding-right: 0;
  }
</style>
