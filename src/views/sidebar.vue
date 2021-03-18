<template>
  <div class="sidebar">
    <router-link to="/example01">东北林业大学</router-link>
    <router-link to="/example01">北京林业大学</router-link>
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
