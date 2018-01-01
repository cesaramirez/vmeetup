<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-bind="{ [`md${card.flex}`]: true }"
              v-for="card in cards"
              :key="card.title"
              xs12
            >
              <v-card>
                <v-card-media
                  :src="card.src"
                  height="200px"
                >
                  <div fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="white--text bg-title-card" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-card-media>
                <v-card-actions>
                  <span class="grey--text">17th July 2018</span>
                  <v-spacer></v-spacer>
                  <v-btn icon :to="{ name: 'Meetup', params: {id: 1} }" exact>
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
        cards: [
          { title: 'Pre-fab homes', src: 'https://static.pexels.com/photos/450597/pexels-photo-450597.jpeg', flex: 12 },
          { title: 'Favorite road trips', src: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Chicago_Theatre_blend.jpg', flex: 6 },
          { title: 'Best airlines', src: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Los_Angeles_center_with_mountains_at_her_back.jpg', flex: 6 }
        ]
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
    padding-top: 40%
    vertical-align: middle
    font-size: 1.25em
</style>
