<template>
  <div class="header mb-3 flex flex-column text-start">
    <h2
      class="w-full pageTitle text-3xl sm:text-4xl md:text-5xl xl:text-4xl font-light leading-tight"
    >
      {{ title }}
    </h2>
    <div class="date w-full">
      <span>{{ $t('最終更新') }} </span>
      <time :datetime="formattedDate">{{ date }}</time>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  computed: {
    formattedDate(): string {
      return convertDatetimeToISO8601Format(this.date)
    }
  }
})
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
}

.date {
  font-size: 0.875rem;
  color: $gray-3;
}
</style>
