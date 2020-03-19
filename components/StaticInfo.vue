<template>
  <component
    :is="isInternalLink(url) ? 'nuxt-link' : 'a'"
    :to="isInternalLink(url) ? url : ''"
    :href="isInternalLink(url) ? '' : url"
    class="StaticInfo flex flex-wrap items-center content-between bg-white w-full p-4 rounded overflow-hidden shadow-lg"
  >
    <span>{{ text }}</span>
    <div v-if="btnText" class="text-end flex-1">
      <span class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        {{ btnText }}
      </span>
    </div>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    url: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    btnText: {
      type: String,
      default: ''
    }
  },
  methods: {
    isInternalLink(path: string): boolean {
      return !/^https?:\/\//.test(path)
    }
  }
})
</script>

<style lang="scss">
/*.StaticInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: $white;
  border: 1px solid $gray-4;
  box-shadow: $shadow;
  border-radius: 4px;
  padding: 0.5em 1em;
  @include text-link();
}*/
</style>
