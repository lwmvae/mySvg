<template>
  <div id="popup" v-if="showPopup">
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
import { mapGetters,mapMutations } from 'vuex'

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
  computed:{
    ...mapGetters(['showPopup'])
  },
  methods: {
    saveBtn() {
      this.$emit('save')
      this.setShow(false)
    },
    delBtn() {
      this.$emit('del')
      this.setShow(false)
    },
    closeBtn() {
      this.setShow(false)
    },
    ...mapMutations({setShow:'SET_SHOW_POPUP'})
  }
}
</script>
<style scoped>
@import 'popup.css'
</style>