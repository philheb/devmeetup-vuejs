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
        date: '2018-12-12'
      },
      {
        imageUrl: 'https://source.unsplash.com/eYqmWlHsDQo',
        id: '6345643',
        title: 'Meetup in Budapest',
        date: '2018-12-29'
      },
      {
        imageUrl: 'https://source.unsplash.com/BG9oZ15a4Xk',
        id: '654347',
        title: 'Meetup in Montreal',
        date: '2019-01-23'
      }
    ],
    user:
    {
      id: '3243243242',
      registeredMeetups: ['dr454344tre']
    }
  },
  mutations: {},
  actions: {},
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
