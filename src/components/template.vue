<template>
  <div class="card card-full-height">

    <div class="card__header"  v-if="$slots.title || title || showBackButton || $slots.headerButtons">
      <div class="card__header-back" v-if="showBackButton">
        <el-button size="mini" @click="$emit('backButtonAction')"><i class="mdi mdi-arrow-left"></i></el-button>
      </div>
      <div class="card__header-title" v-if="$slots.title || title">
        <h1 v-if="title">{{title}}</h1>
        <slot name="title" v-else></slot>
      </div>
      <div class="card__header-buttons">
        <slot name="headerButtons"></slot>
      </div>
    </div>

    <div class="card__body" :class="{scrollVisible: scrollY}">
      <slot name="content"></slot>
    </div>
    <div class="card__footerWrapper" v-if="$slots.footer || $slots.footerActions">
      <div class="card__footer" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
      <div class="card__footerActions" v-if="$slots.footerActions">
        <slot name="footerActions"></slot>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    props:{
      showBackButton:{
        type: Boolean,
        default : false,
      },
      title:{
        type: String,
        default: "",
      },
      scrollY:{
        type: Boolean,
        default : false,
      },

    },
    created(){

    }
  }
</script>

<style lang="scss">
  body, html{
    margin: 0;
    padding: 0;
    background-color: white;
  }
  #app {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    height: 100vh;
    overflow: hidden;
  }
  #__layout, #__layout > div {
    height: 100vh;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }

  .card-full-height {
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 100%;
    flex-grow: 2;
    overflow: hidden;
  }



  .card {
    display: flex;
    flex-direction: column;
    background-color: white;
  }

  .card__header {
    display: flex;
    min-height: 44px;
    height: 44px;
    align-items: center;
    padding: 0 0 0 10px;
    border-bottom: 1px solid #cccccc;
  }

  .card__header-back {
    margin-right: 10px;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .card__header-title {
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .card__header-buttons{
    margin-left: auto;
    height: 100%;
    display: flex;
    align-items: center;
    & > div{
      height: 100%;
      display: flex;
      align-items: center;
      margin-right: 10px;
    }
    button:not(:last-child){
      margin-right: 10px;
      margin-left: 0!important;
    }
    .el-input:not(:last-child){
      margin-right: 10px;
    }
    .el-button + .el-button {
      margin-left: 0;
    }
  }

  .card__footerActions, .card__footerActions > div{
    display: flex;
    align-items: center;
    margin-left: auto;
    height: 100%;
    button, .el-input {
      margin-right: 10px;
      margin-left: 0!important;
    }
  }


  .card__footerWrapper{
    border-top: 1px solid #cccccc;
    margin-top: auto;
    display: flex;
    align-items: center;
    height: 24px;
    background-color: #ffffff;
    min-height: 24px;
    padding: 10px;
  }

  .card__footer {
    display: flex;
    align-items: center;
    flex-grow: 2;
    height: 100%;
  }

  .card__footer > div {
    display: flex;
    align-items: center;
    flex-grow: 2;
    height: 100%;
  }

  .card__footerActions {
    margin-left: auto;
    button {
      margin-right: 10px;
      margin-left: 0;
    }
    .el-button + .el-button {
      margin-left: 0;
    }
  }

  .card__body {
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .card__body > div:not(.devTool) {
    flex-grow: 2;
    display: flex;
    flex-direction: column;
  }
  .scrollVisible{
    overflow-y: auto!important;
  }
  .scrollVisible > div{
    overflow-y: auto!important;
  }
  .jaCenter {
    justify-content: center;
  }

  .jaEnd {
    justify-content: flex-end;
  }

  .jaStart {
    justify-content: flex-start;
  }

  /*----DIALOG-----*/
  .el-dialog.is-fullscreen {
    display: flex;
    flex-grow: 2;
    flex-direction: column;
    .el-dialog__body {
      display: flex;
      flex-direction: column;
      flex-grow: 2;
    }
  }
</style>
