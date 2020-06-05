<template>
  <div>
    <h3>notstarted</h3>

    <!-- <draggable :list="notstarted" group="tasks" @end="save()"> -->
    <div v-for="todo in notstarted" :key="todo.no">
      {{ todo.name }}
      <button @click="removeNotStarted(todo)">削除</button>
    </div>
    <input
      type="text"
      v-if="addflag"
      v-model="this.$store.state.newtodo"
      @keyup.enter="addNotStarted"
    />
    <button v-else @click="changeflag">TODO追加</button>
    <!-- </draggable> -->
  </div>
</template>

<script>
export default {
  computed: {
    notstarted() {
      return this.$store.state.notstarted;
    },
    addflag() {
      return this.$store.state.addflag;
    },
  },
  methods: {
    save() {
      this.$store.commit('save');
    },
    removeNotStarted(todo) {
      this.$store.commit('removeNotStarted', todo);
    },
    addNotStarted() {
      this.$store.commit('addNotStarted');
    },
    changeflag() {
      this.$store.commit('changeflag');
    },
  },
};
</script>

<style></style>
