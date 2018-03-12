<template>
  <div id="popup" v-show="showPopup">
    <div class="popup-wrapper">
      <div class="popup-container">
        <div class="popup-title">
          <div class="title">{{title}}</div>
          <div class="el-icon-close" @click="closeBtn"></div>
        </div>
        <div class="popup-content">
          <slot></slot>
        </div>
        <div class="popup-btn">
          <el-button @click="saveBtn">{{saveBtnText}}</el-button>
          <el-button @click="delBtn">{{delBtnText}}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    saveBtnText: {
      type: String,
      default: '保存'
    },
    delBtnText: {
      type: String,
      default: '删除'
    }
  },
  data() {
    return {
      showPopup: true
    }
  },
  methods: {
    show() {
      this.showPopup = true
    },
    hide() {
      this.showPopup = false
    },
    saveBtn() {
      this.hide()
      this.$emit('save')
    },
    delBtn() {
      this.hide()
      this.$emit('del')
    },
    closeBtn() {
      this.hide()
    }
  }
}
</script>
<style scoped>
@import 'popup.css'
</style>