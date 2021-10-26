import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Theme: "light", // theme can be light or dark
    LayoutType: "full-sidebar", // this can be full-sidebar, mini-sidebar
    Sidebar_drawer: false,
    Customizer_drawer: false,
    SidebarColor: "white", //Change Sidebar Color || 'white', | "#2b2b2b" | "rgb(44, 59, 164)" | "rgb(96, 44, 164)" | "rgb(151, 210, 219)" | "rgb(77, 86, 100)"
    navbarColor: "primary",
    logoColor: "white",
    setHorizontalLayout: false, // Horizontal layout
    Direction: "ltr", // possible value  rtl / ltr
  },
  mutations: {
    SET_THEME(state, payload) {
      state.Theme = payload;
    },
    SET_LAYOUT_TYPE(state, payload) {
      state.LayoutType = payload;
    },
    SET_SIDEBAR_DRAWER(state, payload) {
      state.Sidebar_drawer = payload;
    },
    SET_CUSTOMIZER_DRAWER(state, payload) {
      state.Customizer_drawer = payload;
    },
    SET_SIDEBAR_COLOR(state, payload) {
      state.SidebarColor = payload;
    },
    SET_NAVBAR_COLOR(state, payload) {
      state.navbarColor = payload;
    },
    SET_LOGO_COLOR(state, payload) {
      state.logoColor = payload;
    },
    SET_LAYOUT(state, payload) {
      state.setHorizontalLayout = payload;
    },
    SET_DIRECTION(state, payload) {
      state.Direction = payload;
    },
  },
  actions: {
    setLayoutType({ commit }, width) {
      commit("SET_LAYOUT_TYPE", width);
    },
    //Calendar Action
    addCalendarEvent({ commit }, event) {
      commit("ADD_CALENDAR_EVENT", event);
    },
  },
  getters: {},
});
