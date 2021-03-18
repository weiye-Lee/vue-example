<template>
  <div>
    <h1 @click="changeName">{{ sturef.name }}</h1>
    <p>这是一个没有办法输出y的程序</p>
    <!-- <input type="input" v-model="msg" /> -->
    <!-- <h1>{{ in }}</h1> -->
    <input v-model="sturef.name" placeholder="edit me" />
    <p>Message is: {{ reversName }}</p>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, Ref, ref } from "vue";
import { Student, School } from "@/datasource/Type";
function useStudent(student: Ref<Student>) {
  const reversName = computed(() => {
    return student.value.name?.replaceAll(" ", "_");
  });
  // 置空，重新输入
  const changeName = () => {
    student.value.name = "";
  };
  return {
    reversName,
    changeName
  };
}
export default defineComponent({
  setup() {
    const student: Student = {
      name: "weiye",
      age: 20
    };
    const sturef = ref(student);
    const { reversName, changeName } = useStudent(sturef);
    return {
      sturef,
      reversName,
      changeName
    };
  }
});
</script>
