<template>
  <div class="m-auto">
    <event-card :events="events"></event-card>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    EventCard,
  },

  data() {
    return {
      events: [],
    };
  },

  methods: {
    ...mapActions("event", ["getEventList"]),
  },

  computed: {},

  async created() {
    this.events = await this.getEventList();
  },
};
</script>
