import Vue from 'vue'

// Lib imports
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'http://localhost:5000';

Vue.prototype.$http = axios;
