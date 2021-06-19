<template>
  <div>
    <router-link :to="{ name: 'EventDetails', params: { id: event.id } }">
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
      >
        <div class="p-4">
          <span class="text-green-500"
            >{{ event.time }} on {{ event.location }}</span
          >
          <div class="font-extrabold">{{ event.title }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
    },
  },
};
</script>

<style scoped></style>
