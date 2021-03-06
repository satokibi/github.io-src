import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    history: [],
    init_flag: false,
    login_flag: false,
    current_line: "",

    username: "",
    password: "",
    user_form_flag: true,

    winners_show_flag: false,
    form_send_flag: false
  },

  mutations: {
    finishInit(state) {
      state.init_flag = true;
    },
    login(state) {
      state.login_flag = true;
    },
    logout(state) {
      state.login_flag = false;
    },
    updateCurrentLine(state, message) {
      state.current_line = message
    },
    pushHistory(state, str) {
      state.history.push(str);
      if (state.history.length > 14) {
        state.history = state.history.slice(-14);
      }
    },
    clearHistory(state) {
      state.history = [];
    },

    updateUserName(state, name) {
      state.username = name;
    },
    updatePassword(state, pass) {
      state.password = pass;
    },
    setPassForm(state) {
      state.user_form_flag = false;
      document.getElementById('terminal-input').focus();
    },
    setUserForm(state) {
      state.user_form_flag = true;
      document.getElementById('terminal-input').focus();
    },

    showWinners(state) {
      state.winners_show_flag = true;
    },
    hiddenWinners(state) {
      state.winners_show_flag = false;
    },

    formSend(state) {
      state.form_send_flag = true;
    },
  },
  getters: {
    getInitFlag: function(state) {
      return state.init_flag;
    },
    getLoginFlag: function(state) {
      return state.login_flag;
    },
    getCurrentLine: function(state) {
      return state.current_line;
    },
    getHistory: function(state) {
      return state.history;
    },

    getUserName: function(state) {
      return state.username;
    },
    getPassword: function(state) {
      return state.password;
    },
    getUserFormFlag: function(state) {
      return state.user_form_flag;
    },
    getWinnersShowFlag: function(state) {
      return state.winners_show_flag;
    },
    getFormSendFlag: function(state) {
      return state.form_send_flag;
    }
  }
})
