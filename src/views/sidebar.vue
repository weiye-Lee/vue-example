<template>
  <div class="sidebar">
    <router-link to="/example01">图标</router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "sidebar"
});
</script>
<style scoped>
.sidebar {
  background: #42b983;
  border: 1px solid black;
  height: 100px;
  position: absolute;
  width: 100px;
}
</style>
