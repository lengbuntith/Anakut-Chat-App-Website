export const state = () => ({
  status: 'ok',
  themes: {
    colors: ['red', 'blue', 'green', 'orange', 'yellow'],
    current: 'red',
  },
  language: {
    languages: ['khmer', 'english'],
    current: 'english',
  },
  block: {
    users: [],
  }
})

export const mutations = {
  SET_COLOR: (state, color) => {
    state.themes.current = color
  },

  SET_LANGUAGE: (state, language) => {
    state.language.current = language
  },

  SET_BLOCK: (state, users) => {
    state.block.users = users;
  }
}

export const actions = {
  goTo(context, path) {
    this.$router.push(path)
  },

  addBlockUser(context, user) {
    //get old block users
    let users = JSON.parse(JSON.stringify(context.state.block))
    //push new user
    users.push(user)
    //commit
    context.commit('SET_BLOCK', users)
  },

  removeBlockUser(context, user) {
    //get old block users
    let users = JSON.parse(JSON.stringify(context.state.block))

    //find index of input user
    let index = users.findIndex((u) => u.id == user.id)

    //user not found -> stop
    if(index == -1) return

    //remove user by index
    users.splice(index, 1);

    //commit
    context.commit('SET_BLOCK', users);
  }
}
