<template>
  <div>
    <van-nav-bar
      title="Chat App"
      @click-left="onClickLeft"
      @click-right="$store.dispatch('goTo', '/settings')"
    >
      <template #left>
        <van-search shape="round" placeholder="Placeholder" />
      </template>

      <template #right>
        <van-icon name="setting-o" />
      </template>
    </van-nav-bar>

    <van-tree-select
      :items="items"
      :main-active-index.sync="active"
      height="100vh"
    >
      <template #content>
        <div v-if="active == 0">
          <div>hello</div>
          <div style="padding: 20px">
            <div
              v-for="(c, i) in items[active].chat"
              :key="i"
              style="display: flex"
              :style="
                c.user == currentUser
                  ? ' justify-content: end'
                  : 'justify-content: start'
              "
            >
              <div
                style="
                  border: 1px solid #eee;
                  padding: 10px;
                  border-radius: 10px;
                  width: max-content;
                  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                "
              >
                {{ c.message }}
              </div>
            </div>
          </div>
        </div>

        <div v-if="active == 1">
          <h1>Welcome to the Socket.io Chat App!</h1>
          <div id="messages">
            <div v-for="(m, i) in currentMessage" :key="i">
              {{ m }}
            </div>
          </div>
          <form @submit.prevent="sendMessage">
            <input
              type="text"
              id="message-input"
              placeholder="Type your message..."
              v-model="newMessage"
            />
            <button type="submit">Send</button>
          </form>
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
          text: 'Kirito',
          badge: 2,
          chat: [
            {
              user: 'tith',
              message: 'Hello',
            },

            {
              user: 'kirito',
              message: 'Yes HI',
            },
          ],
        },
        { text: 'Asuna', badge: '', chat: [] },
        { text: 'Sinon', badge: '', chat: [] },
      ],
      active: 0,
      currentUser: 'tith',
      newMessage: '',
      currentMessage: [],
    }
  },

  mounted() {
    this.$socket.on('message', (msg) => {
      console.log(msg)
      this.currentMessage = msg
    })
  },

  methods: {
    sendMessage() {
      this.$socket.emit('message', this.newMessage)
      this.newMessage = ''
    },
  },
}
</script>

<style lang="scss" scoped></style>
