<template>
  <div id="app>">
    <div class="container">
      <div class="card">
        <h3>notStarted</h3>
        <draggable :list="notStarted" group="tasks" @end="save()">
          <div class="todos" v-for="todo in notStarted" :key="todo.no">
            {{ todo.name }}
            <button @click="removenotstarted(todo)">削除</button>
          </div>
          <input
            type="text"
            v-if="addflag"
            v-model="newtodo"
            @keyup.enter="addnotstarted"
          />

          <button class="button" v-else @click="changeflag">TODO追加</button>
        </draggable>
      </div>

      <!-- <not-started
        @changeflag="changeflag"
        @removenotstarted="removenotstarted"
        @addnotstarted="addnotstarted"
        :addflag="addflag"
        :newtodo="newtodo"
        v-bind:todo="todo"
        v-for="todo in notStarted"
        :key="todo.no"
      /> -->

      <div class="card pink">
        <h3>inProgress</h3>
        <draggable :list="inProgress" group="tasks" @end="save()">
          <div class="todos" v-for="todo in inProgress" :key="todo.no">
            {{ todo.name }}
            <button @click="removeInProgless(todo)">削除</button>
          </div>
          <input
            type="text"
            v-if="addflag"
            v-model="newtodo2"
            @keyup.enter="addinProgress"
          />
          <button class="button" v-else @click="changeflag">TODO追加</button>
        </draggable>
      </div>

      <div class="card">
        <h3>pending</h3>
        <draggable :list="pending" group="tasks" @end="save()">
          <div class="todos" v-for="todo in pending" :key="todo.no">
            {{ todo.name }}
            <button @click="removePending(todo)">削除</button>
          </div>
          <input
            type="text"
            v-if="addflag"
            v-model="newtodo3"
            @keyup.enter="addPending"
          />
          <button class="button" v-else @click="changeflag">TODO追加</button>
        </draggable>
      </div>

      <div class="card">
        <h3>done</h3>
        <draggable :list="done" group="tasks" @end="save()">
          <div class="todos" v-for="todo in done" :key="todo.no">
            {{ todo.name }}
            <button @click="removeDone(todo)">削除</button>
          </div>
          <input
            type="text"
            v-model="newtodo4"
            @keyup.enter="addDone"
            v-if="addflag"
          />
          <button class="button" v-else @click="changeflag">TODO追加</button>
        </draggable>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable';
// import NotStarted from './components/NotStarted';
export default {
  data() {
    return {
      newtodo: '',
      newtodo2: '',
      newtodo3: '',
      newtodo4: '',
      addflag: false,
      uid: 0,
      notStarted: [],
      inProgress: [],
      pending: [],
      done: [],
    };
  },
  mounted() {
    if (
      localStorage.getItem('notStarted') &&
      localStorage.getItem('inProgress') &&
      localStorage.getItem('pending') &&
      localStorage.getItem('done')
    ) {
      try {
        this.notStarted = JSON.parse(localStorage.getItem('notStarted'));
        this.inProgress = JSON.parse(localStorage.getItem('inProgress'));
        this.pending = JSON.parse(localStorage.getItem('pending'));
        this.done = JSON.parse(localStorage.getItem('done'));
      } catch (e) {
        localStorage.removeItem('notStarted');
        localStorage.removeItem('inProgress');
        localStorage.removeItem('pending');
        localStorage.removeItem('done');
      }
    }
  },
  methods: {
    addnotstarted() {
      this.notStarted.push({ id: this.uid++, name: this.newtodo, listno: '1' });
      this.addflag = false;
      this.newtodo = '';
      this.save();
    },
    addinProgress() {
      this.inProgress.push({
        id: this.uid++,
        name: this.newtodo2,
        listno: '2',
      });
      this.addflag = false;
      this.newtodo2 = '';
      this.save();
    },
    addPending() {
      this.pending.push({ id: this.uid++, name: this.newtodo3, listno: '3' });
      this.addflag = false;
      this.newtodo3 = '';
      this.save();
    },
    addDone() {
      this.done.push({ id: this.uid, name: this.newtodo4, listno: '4' });
      this.addflag = false;
      this.newtodo4 = '';
      this.save();
    },
    removenotstarted(todo) {
      this.notStarted.splice(this.notStarted.indexOf(todo), 1);
      this.save();
    },
    removeInProgless(todo) {
      this.inProgress.splice(this.inProgress.indexOf(todo), 1);
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
      const a = JSON.stringify(this.inProgress);
      localStorage.setItem('inProgress', a);
      const b = JSON.stringify(this.notStarted);
      localStorage.setItem('notStarted', b);
      const c = JSON.stringify(this.pending);
      localStorage.setItem('pending', c);
      const d = JSON.stringify(this.done);
      localStorage.setItem('done', d);
    },
  },
  components: {
    draggable,
    // NotStarted,
  },
};
</script>
<style>
.container {
  display: flex;
  justify-content: space-around;
}
.card {
  text-align: center;
  background-color: gray;
}
.todos {
  padding: 15px;
  border: 0.5px solid rgb(72, 63, 63);
}
.button {
  margin: 10px;
}
h3 {
  width: 220px;
  font-size: 35px;
}
</style>
