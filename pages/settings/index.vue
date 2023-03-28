<template>
  <div>
    <van-tree-select
      :items="items"
      :main-active-index.sync="active"
      height="100vh"
    >
      <template #content>
        <!-- chat settings -->
        <div v-if="active == 0">
          <van-cell>
            <h4 style="text-transform: capitalize">Themes</h4>
            <div class="flex">
              <div
                v-for="(color, j) in themes.colors"
                :key="j"
                :style="`background-color: ${color}; padding: 20px; margin-right: 10px; border: ${
                  color == themes.current ? '2px solid ' : ''
                }`"
                @click="$store.commit('SET_COLOR', color)"
              ></div>
            </div>
          </van-cell>

          <van-cell>
            <h4 style="text-transform: capitalize">Chat Background</h4>
            <div class="flex"></div>
          </van-cell>
        </div>

        <!-- language -->
        <div v-if="active == 1">
          <van-cell>
            <h4 style="text-transform: capitalize">Select Language</h4>
            <div class="flex">
              <div
                v-for="(l, i) in language.languages"
                :key="i"
                :style="`padding: 20px; border: ${
                  language.current == l ? '2px solid' : ''
                }`"
                @click="$store.commit('SET_LANGUAGE', l)"
              >
                {{ l }}
              </div>
            </div>
          </van-cell>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'Chat Settings',
        },
        {
          text: 'Language',
        },
      ],
      active: 0,
    }
  },

  computed: {
    themes() {
      return this.$store.state.themes
    },

    language() {
      return this.$store.state.language
    },
  },
}
</script>

<style lang="scss" scoped></style>
