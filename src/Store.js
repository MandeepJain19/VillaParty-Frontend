import { createStore } from "vuex";
import axios from "axios";
const store = createStore({
  state() {
    return {
      isList: false, //filter component
      bookVillaCnf: false,
      spinner: false,
      villas: [],
      filterDate: null,
    };
  },
  getters: {
    isList(state) {
      return state.isList;
    },
    bookVillaCnf(state) {
      return state.bookVillaCnf;
    },
    spinner(state) {
      return state.spinner;
    },
    getVillas(state) {
      return state.villas;
    },
    filterDate(state) {
      return state.filterDate;
    },
  },
  mutations: {
    toggleList(state) {
      state.isList = !state.isList;
    },
    toggleCnf(state) {
      state.bookVillaCnf = !state.bookVillaCnf;
    },
    toggleSpinner(state, bool) {
      state.spinner = bool;
    },
    closeList(state) {
      state.isList = false;
    },
    setVillas(state, villa) {
      state.villas = villa;
    },
    changeFilterDate(state, date) {
      state.filterDate = date;
    },
  },
  actions: {
    closeList(context) {
      context.commit("closeList");
    },
    async fetchVillas({ commit }) {
      const api = "https://villaparty-backend.onrender.com";
      try {
        const data = await axios.get(api);
        commit("setVillas", data.data);
        console.log("fetched");
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async bookVilla(context, payload) {
      console.log(payload);
      context.commit("toggleSpinner", true);
      context.commit("toggleCnf");
      const api = "https://villaparty-backend.onrender.com";
      try {
        const conf = await axios.patch(`${api}/bookVilla/${payload.name}`, {
          startDate: payload.startDate,
          endDate: payload.endDate,
        });
        context.dispatch("fetchVillas");
        console.log(conf);
        setTimeout(() => {
          context.commit("toggleSpinner", false);
        }, 5000);
      } catch (error) {
        alert(error);
        console.log(error)
      }
    },
    SpecificVilla(context, payload) {
      context.getters.getSpecificVilla(payload);
    },
  },
});

export default store;
