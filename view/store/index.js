import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
// Store functionality

Vue.use(Vuex);

// Create a new store
const store = new Vuex.Store({
  state,
});

export default store;
