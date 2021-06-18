import { fetchEventList, fetchEventDetails } from "./eventService";

// const [SET_EVENT_LIST] = "SET_EVENT_LIST";

export default {
  namespaced: true,

  state: {},

  getters: {},

  mutations: {},

  actions: {
    async getEventList() {
      const eventList = await fetchEventList();
      return eventList;
    },

    async getEventDetails(id) {
      const eventDetails = await fetchEventDetails(id);
      console.log(eventDetails, "vuex");
      return eventDetails;
    },
  },
};
