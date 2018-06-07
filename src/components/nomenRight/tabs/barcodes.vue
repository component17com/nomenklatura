<template>
  <up-template scrollY>
    <div slot="content">
      <div class="barcodes-wrapper">
        <div class="newBarcodes"><el-button type="info" @click="newBarcode">Добавить штрихкод</el-button></div>
        <el-table border :data="barcodesTable">
          <el-table-column
            prop="barcod"
            label="Штрихкод">
          </el-table-column>
          <el-table-column
            prop="type"
            label="Тип">
          </el-table-column>
          <el-table-column
          label="Действия"
          width="200">
            <template slot-scope="scope">
              <el-button type="text">
                <i class="mdi mdi-pencil"></i>
                Изменить
              </el-button>
              <el-button type="text">
                <i class="mdi mdi-delete"></i>
                Удалить
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </up-template>
</template>

<script>
  export default {
    data(){
      return{
        barcodesTable: [{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        },{
          type: "EAN-13",
          barcod: "9780201379624",
        }]
      }
    },
    methods:{
      newBarcode() {
        this.$prompt('Введите или отсканируйте штрихкод', 'Штрихкод', {
          confirmButtonText: 'Добавить',
          cancelButtonText: 'Отмена',
        }).then(value => {
          this.$notify({
            title: 'Успешно',
            message: 'Штрихкод добавлен',
            type: 'success',
            duration: 2000,
          });
        }).catch(() => {

        });
      },
    },
  }
</script>

<style lang="scss" scoped>
    .barcodes-wrapper{
      .newBarcodes{
        margin-bottom: 10px;
      }
    }
</style>
