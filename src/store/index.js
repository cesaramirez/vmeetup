import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        src: 'https://static.pexels.com/photos/450597/pexels-photo-450597.jpeg',
        id: 1,
        title: 'Meetup in New York',
        date: '2018-01-18',
        feature: true,
        flex: 12
      }, {
        src: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Chicago_Theatre_blend.jpg',
        id: 2,
        title: 'Meetup in Chicago',
        date: '2018-02-18',
        feature: false,
        flex: 6
      }, {
        src: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Los_Angeles_center_with_mountains_at_her_back.jpg',
        id: 3,
        title: 'Meetup in Los Angeles',
        date: '2019-06-18',
        feature: true,
        flex: 6
      }
    ],
    user: {
      id: 1,
      registeredMeetups: [1]
    }
  },
  getters: {
    loadedMeetups: state => state.loadedMeetups.sort((meetupA, meetupB) => meetupA.date > meetupB.date),
    featureMeetups: getters => getters.loadedMeetups.slice(0, 5),
    loadedMeetup: state => (meetupId) => state.loadedMeetups.find(meetup => meetup.id === meetupId)
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      console.log('action')
      const meetup = {
        title: payload.title,
        location: payload.location,
        image: payload.image,
        description: payload.description
      }
      commit('createMeetup', meetup)
    }
  }
})
