<template>
  <div>
    <v-layout class="mb-4">
      <v-flex xs12>
        <v-carousel lazy hide-delimiters>
          <v-carousel-item v-for="(item,i) in meetups"
                           :src="item.src"
                           :key="i"
                           transition="fade"
                           reverseTransition="fade">
            <div class="title" @click="onLoadMeetup(item)" style="cursor: pointer">{{ item.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-sm-right text-xs-center">
        <v-btn large :to="{ name: 'Meetups'}">
          Explore Meetups
        </v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left text-xs-center">
        <v-btn large :to="{ name: 'CreateMeetup'}">
          Organize Meetup
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    meetups () {
      return this.$store.getters.featureMeetups
    }
  },
  methods: {
    onLoadMeetup (meetup) {
      this.$router.push({ name: 'Meetup', params: { id: meetup.id } })
    }
  }
}
</script>

<style scoped lang="stylus">
.title {
  position: absolute;
  display: block;
  width: 100%;
  text-align: center;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  padding: 20px;
}

#carousel-view {
  .fade {
    &-enter-active, &-leave-active, &-leave-to {
      transition: 0.5s ease-out;
      position: absolute;
      top: 0;
      left: 0;
    }

    &-enter, &-leave, &-leave-to {
      opacity: 0;
    }
  }
}
</style>
