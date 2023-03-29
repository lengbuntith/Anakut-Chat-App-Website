<template>
  <div>
    <van-tree-select
      :items="items"
      :main-active-index.sync="active"
      height="100vh"
    >
      <template #content>
        <!-- edit profile -->
        <div v-if="active == 0">
          <van-cell>
            <h4 style="text-transform: capitalize">Edit Profile</h4>
            <div style="display: flex; justify-content: center">
              <van-uploader :after-read="afterRead" />
            </div>

            <van-form @submit="updateProfile">
              <van-field
                v-model="profile.name"
                name="Name"
                label="Name"
                placeholder="Name"
                :rules="[{ required: true, message: 'Name is required' }]"
              />
              <van-field
                v-model="profile.email"
                name="Email"
                label="Email"
                placeholder="Email"
                readonly
              />
              <van-field
                v-model="profile.phone"
                name="Phone"
                label="Phone"
                placeholder="Phone"
                readonly
              />
              <div style="margin: 16px">
                <van-button round block type="info" native-type="submit">
                  Update Profile
                </van-button>
              </div>
            </van-form>
          </van-cell>
        </div>

        <!-- chat settings -->
        <div v-if="active == 1">
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
        <div v-if="active == 2">
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
                <img :src="`/images/lang/${l}.png`" :alt="l" />
              </div>
            </div>
          </van-cell>
        </div>

        <!-- block users -->
        <div v-if="active == 3">
          <van-cell>
            <h4 style="text-transform: capitalize">Blocked Users</h4>
            <div class="flex">
              <div></div>
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
          text: 'Edit Profile',
        },
        {
          text: 'Chat Settings',
        },
        {
          text: 'Language',
        },
        {
          text: 'Blocked Users',
        },
      ],
      active: 0,
      profile: {
        name: '',
        email: '',
        phone: '',
      },
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

  methods: {
    afterRead(file) {
      console.log(file)
    },

    updateProfile() {
      console.log('update profile')
    },
  },
}
</script>

<style lang="scss" scoped></style>
