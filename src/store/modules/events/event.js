import { fetchEventList, fetchEventDetails } from "./eventService";

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
      return eventDetails;
    },
  },
};
