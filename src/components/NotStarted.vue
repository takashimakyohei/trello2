<template>
  <div>
    <h3>aaaa</h3>
    {{ todo.name }}
    <button @click="removenotstarted">削除</button>
    <input
      type="text"
      v-if="addflag"
      v-model="newtodo"
      @keyup.enter="addnotstarted"
    />
    <button v-else @click="changeflag">TODO追加</button>
  </div>
</template>
<script>
export default {
  props: ['addflag', 'todo', 'newtodo'],
  methods: {
    changeflag() {
      this.$emit('changeflag');
    },
    addnotstarted() {
      this.$emit('addnotstarted');
    },
    removenotstarted() {
      this.$emit('removenotstarted');
    },
  },
};
</script>
<style></style>
