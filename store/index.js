export const state = () => ({
  status: 'ok',
  themes: {
    colors: ['red', 'blue', 'green', 'orange'],
    current: 'red',
  },
  language: {
    languages: ['khmer', 'english'],
    current: 'english',
  },
})

export const mutations = {
  SET_COLOR: (state, color) => {
    state.themes.current = color
  },

  SET_LANGUAGE: (state, language) => {
    state.language.current = language
  },
}

export const actions = {
  goTo(context, path) {
    this.$router.push(path)
  },
}
