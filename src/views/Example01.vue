<template>
  <div class="app">
    <!-- 点击文本，文字发生变化，数据绑定 -->
    <h1 @click="change">{{ message }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => {
    return {
      message: "hello"
    };
  },
  methods: {
    change(): string {
      this.message = this.message.replace("l", "$");
      return this.message;
    }
  }
});
</script>
