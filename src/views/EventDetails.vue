<template>
  <div>
    <h1>{{ event.title }}</h1>
    <p class="text-bold">{{ event.time }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
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
    console.log(this.getEventDetails(this.id), "detail");
  },
};
</script>

<style lang="scss" scoped></style>
