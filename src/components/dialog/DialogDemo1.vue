<demo>
常规使用
</demo>
<template>
  <Button @click="toggle">打开弹出框</Button>
  <Dialog v-model:visible="isVisible"
          :canClickMaskToClose="true"
          :ok="handleOk"
          :cancel="handleCancel"
  >
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <div>代码是写出来给人看的，附带能在机器上运行</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
import {ref} from 'vue';
export default {
  components: {Dialog, Button},
  setup(){
    const isVisible = ref(false)
    const toggle = ()=>{
      isVisible.value = !isVisible.value
    }
    const handleOk = () => {
      /* 处理确认事件 */
    }
    const handleCancel = () => {
      /* 处理取消事件 */
    }
    return{
      isVisible, toggle, handleOk, handleCancel
    }
  }
}
</script>
