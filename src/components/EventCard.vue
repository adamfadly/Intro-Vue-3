<template>
  <div>
    <div
      class="
        px-4
        border-2
        rounded-xl
        h-48
        w-1/4
        m-auto
        mb-2
        shadow-md
        hover:ring-2
      "
      v-for="(event, index) in events"
      :key="index"
    >
      <div class="p-4">
        <span class="text-green-500"
          >{{ event.time }} on {{ event.location }}</span
        >
        <div class="font-extrabold">{{ event.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
    },
  },
};
</script>

<style scoped></style>
