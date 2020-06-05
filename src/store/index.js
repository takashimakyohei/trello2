import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newtodo: '',
    addflag: false,
    uid: 0,
    notstarted: [],
    inprogress: [],
    pending: [],
    done: [],
  },
  mutations: {
    addNotStarted() {
      this.state.notstarted.push({
        id: this.state.uid++,
        name: this.state.newtodo,
        listno: '1',
      });
      this.state.addflag = false;
      this.state.newtodo = '';
      this.state.save();
    },
    addInProgress() {
      this.state.inprogress.push({
        id: this.state.uid++,
        name: this.state.newtodo,
        listno: '2',
      });
      this.state.addflag = false;
      this.state.newtodo = '';
      this.state.save();
    },
    addPending() {
      this.state.pending.push({
        id: this.state.uid++,
        name: this.state.newtodo,
        listno: '3',
      });
      this.state.addflag = false;
      this.state.newtodo = '';
      this.state.save();
    },
    addDone() {
      this.state.done.push({
        id: this.state.uid,
        name: this.state.newtodo,
        listno: '4',
      });
      this.state.addflag = false;
      this.state.newtodo = '';
      this.state.save();
    },
    removeNotStarted(todo) {
      this.state.notstarted.splice(this.state.notstarted.indexOf(todo), 1);
      this.state.save();
    },
    removeInProgless(todo) {
      this.state.inprogress.splice(this.state.inprogress.indexOf(todo), 1);
      this.state.save();
    },
    removePending(todo) {
      this.state.pending.splice(this.state.pending.indexOf(todo), 1);
      this.state.save();
    },
    removeDone(todo) {
      this.state.done.splice(this.state.done.indexOf(todo), 1);
      this.state.save();
    },
    changeflag() {
      this.state.state.addflag = true;
    },
    // save() {
    //   const a = JSON.stringify(this.state.inprogress);
    //   localStorage.setItem('inprogress', a);
    //   const b = JSON.stringify(this.state.notstarted);
    //   localStorage.setItem('notstarted', b);
    //   const c = JSON.stringify(this.state.pending);
    //   localStorage.setItem('pending', c);
    //   const d = JSON.stringify(this.state.done);
    //   localStorage.setItem('done', d);
    // },
  },
  actions: {},
  modules: {},
});
