<template>
  <div id="app>">
    <div class="container">
      <div>
        <h3>notstarted</h3>
        <draggable :list="notstarted" group="tasks" @end="save()">
          <div v-for="todo in notstarted" :key="todo.no">
            {{ todo.name }}
            <button @click="removeNotStarted(todo)">削除</button>
          </div>
          <input
            type="text"
            v-if="addflag"
            v-model="newtodo"
            @keyup.enter="addNotStarted"
          />
          <button v-else @click="changeflag">TODO追加</button>
        </draggable>
      </div>
      <div>
        <h3>inprogress</h3>
        <draggable :list="inprogress" group="tasks" @end="save()">
          <div v-for="todo in inprogress" :key="todo.no">
            {{ todo.name }}
            <button @click="removeInProgless(todo)">削除</button>
          </div>
          <input type="text" v-model="newtodo" @keyup.enter="addInProgress" />
        </draggable>
      </div>
      <div>
        <h3>pending</h3>
        <draggable :list="pending" group="tasks" @end="save()">
          <div v-for="todo in pending" :key="todo.no">
            {{ todo.name }}
            <button @click="removePending(todo)">削除</button>
          </div>
          <input type="text" v-model="newtodo" @keyup.enter="addPending" />
        </draggable>
      </div>
      <div>
        <h3>done</h3>
        <draggable :list="done" group="tasks" @end="save()">
          <div v-for="todo in done" :key="todo.no">
            {{ todo.name }}
            <button @click="removeDone(todo)">削除</button>
          </div>
          <input type="text" v-model="newtodo" @keyup.enter="addDone" />
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
export default {
  data() {
    return {
      newtodo: '',
      addflag: false,
      uid: 0,
      notstarted: [],
      inprogress: [],
      pending: [],
      done: [],
    };
  },
  mounted() {
    if (
      localStorage.getItem('notstarted') &&
      localStorage.getItem('inprogress') &&
      localStorage.getItem('pending') &&
      localStorage.getItem('done')
    ) {
      try {
        this.notstarted = JSON.parse(localStorage.getItem('notstarted'));
        this.inprogress = JSON.parse(localStorage.getItem('inprogress'));
        this.pending = JSON.parse(localStorage.getItem('pending'));
        this.done = JSON.parse(localStorage.getItem('done'));
      } catch (e) {
        localStorage.removeItem('notstarted');
        localStorage.removeItem('inprogress');
        localStorage.removeItem('pending');
        localStorage.removeItem('done');
      }
    }
  },
  methods: {
    addNotStarted() {
      this.notstarted.push({ id: this.uid++, name: this.newtodo, listno: '1' });
      this.addflag = false;
      this.newtodo = '';
      this.save();
    },
    addInProgress() {
      this.inprogress.push({ id: this.uid++, name: this.newtodo, listno: '2' });
      this.addflag = false;
      this.newtodo = '';
      this.save();
    },
    addPending() {
      this.pending.push({ id: this.uid++, name: this.newtodo, listno: '3' });
      this.addflag = false;
      this.newtodo = '';
      this.save();
    },
    addDone() {
      this.done.push({ id: this.uid, name: this.newtodo, listno: '4' });
      this.addflag = false;
      this.newtodo = '';
      this.save();
    },
    removeNotStarted(todo) {
      this.notstarted.splice(this.notstarted.indexOf(todo), 1);
      this.save();
    },
    removeInProgless(todo) {
      this.inprogress.splice(this.inprogress.indexOf(todo), 1);
      this.save();
    },
    removePending(todo) {
      this.pending.splice(this.pending.indexOf(todo), 1);
      this.save();
    },
    removeDone(todo) {
      this.done.splice(this.done.indexOf(todo), 1);
      this.save();
    },
    changeflag() {
      this.addflag = true;
    },
    save() {
      const a = JSON.stringify(this.inprogress);
      localStorage.setItem('inprogress', a);
      const b = JSON.stringify(this.notstarted);
      localStorage.setItem('notstarted', b);
      const c = JSON.stringify(this.pending);
      localStorage.setItem('pending', c);
      const d = JSON.stringify(this.done);
      localStorage.setItem('done', d);
    },
  },
  components: {
    draggable,
  },
};
</script>

<style>
.container {
  display: flex;
}
</style>
