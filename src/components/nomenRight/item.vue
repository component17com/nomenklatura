<template>
  <up-template title="Тут титл" showBackButton>

    <div slot="content">
      <div class="catNomen-wrapper">
        <div class="catNomen__header">
          <div class="catNomen__header-buttons">
            <el-button type="primary">Добавить позицию</el-button>
            <el-button type="info">Удалить выбранные</el-button>
          </div>
          <div class="catNomen__header-buttons">
            <el-button title="Отправить по почте"><i class="mdi mdi-email"></i></el-button>
            <el-button title="Распечатать"><i class="mdi mdi-printer"></i></el-button>
          </div>
        </div>
        <div class="catNomen__table">
          <el-table
            :data="nomenData"
            border
            style="width: 100%"
            stripe>
            <el-table-column
              type="selection"
              width="55"
              align="center">
            </el-table-column>
            <el-table-column
              label="Код"
              width="80">
              <template slot-scope="scope">
                <div class="catNomen__table-code pointer">
                  {{scope.row.code}}
                </div>
              </template>
            </el-table-column>
            <el-table-column
              label="Наименование">
              <template slot-scope="scope">
                <div class="catNomen__table-name pointer">
                  {{scope.row.name}}
                </div>
              </template>
            </el-table-column>
            <el-table-column
              label="Действие"
              width="180">
              <template slot-scope="scope">
                <el-button type="text"><i class="mdi mdi-pencil"></i>Изменить</el-button>
                <el-button type="text"><i class="mdi mdi-delete"></i>Удалить</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div slot="footer">
      <el-pagination
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </up-template>
</template>

<script>
  export default {
    data() {
      return {
        multipleSelection: [],
        nomenData: [{
          code: '000001',
          name: 'Верхняя направляющая пластина этикетки Zebra ',
        }, {
          code: '000001',
          name: 'Внутренний лоток для подачи этикеток Z-сложения Zebra 105SL ',
        }, {
          code: '000001',
          name: 'Втулка снятия риббона Zebra 105SL',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }, {
          code: '000001',
          name: 'Главный приводной ремень Zebra 105SL (203dpi)',
        }],
      }
    },
  }
</script>

<style scoped>

</style>
