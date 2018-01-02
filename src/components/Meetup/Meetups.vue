<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-bind="{ [`md${meetup.flex}`]: true }"
              v-for="meetup in meetups"
              :key="meetup.id"
              xs12
            >
              <v-card>
                <v-card-media
                  :src="meetup.src"
                  height="200px"
                >
                  <div fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="white--text bg-title-card" v-text="meetup.title"></span>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-card-media>
                <v-card-actions>
                  <span class="grey--text">{{ meetup.date }}</span>
                  <v-spacer></v-spacer>
                  <v-btn icon :to="{ name: 'Meetup', params: {id: meetup.id} }" exact>
                    <v-icon>visibility</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    computed: {
      meetups () {
        return this.$store.getters.loadedMeetups
      }
    }
  }
</script>

<style scoped lang="stylus">
  .bg-title-card
    background-color: rgba(0, 0, 0, 0.5)
    padding: 20px
    left: 0
    top: 0
    padding-top: 30%
    vertical-align: middle
    font-size: 1.25em
</style>
