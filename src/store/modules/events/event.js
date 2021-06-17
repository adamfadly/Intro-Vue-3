import { fetchEventList } from "./eventService";

// const [SET_EVENT_LIST] = "SET_EVENT_LIST";

export default {
  namespaced: true,

  state: {},

  getters: {
    // getEvents(state) {
    //   return state.eventsCollection;
    // },
  },

  mutations: {
    // SET_EVENT_LIST(state, eventList) {
    //   state.eventsCollection = eventList;
    // },
  },

  actions: {
    async getEventList() {
      const eventList = await fetchEventList();
      return eventList;
    },
  },
};
