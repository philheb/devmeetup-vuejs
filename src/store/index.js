import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://source.unsplash.com/TaCk3NspYe0',
        id: '123214',
        title: 'Meetup in New York',
        date: '2018-12-12',
        time: '18:00',
        location: 'New York',
        description: 'This is a description'
      },
      {
        imageUrl: 'https://source.unsplash.com/eYqmWlHsDQo',
        id: '6345643',
        title: 'Meetup in Budapest',
        date: '2018-12-29',
        time: '18:00',
        location: 'Budapest',
        description: 'This is a description'
      },
      {
        imageUrl: 'https://source.unsplash.com/BG9oZ15a4Xk',
        id: '654347',
        title: 'Meetup in Montreal',
        date: '2019-01-23',
        time: '18:00',
        location: 'Montreal',
        description: 'This is a description'
      }
    ],
    user:
    {
      id: '3243243242',
      registeredMeetups: ['dr454344tre']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        time: payload.time,
        id: 'gfdsjgyd333'
      }
      // Reach out to Firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
