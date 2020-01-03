/* eslint no-shadow: 'off', no-param-reassign: 'off' */

import * as cms from '../api/cms'

export const state = () => ({
  settings: {},
})

export const mutations = ({
  set: (state, payload) => {
    state[payload.key] = payload.value
  },
})

export const actions = ({
  nuxtServerInit: async ({ commit }) => {
    // Fetch CMS settings and store globally
    commit('set', { key: 'settings', value: await cms.getSettings() })
  },
})
