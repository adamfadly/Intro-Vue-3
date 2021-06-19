<template>
  <div>
    <h1 class="font-bold">{{ event.title }}</h1>
    <p class="text-green-300">{{ event.time }} @ {{ event.location }}</p>
    <p class="text-purple-400">{{ event.description }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["id"],
  data() {
    return {
      event: {},
    };
  },
  methods: {
    ...mapActions("event", ["getEventDetails"]),
  },

  async created() {
    this.event = await this.getEventDetails(this.id);
  },
};
</script>
