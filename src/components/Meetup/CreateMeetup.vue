<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title class="primary--text">
            <div class="headline">Create New Meetup</div>
          </v-card-title>
          <form @submit.prevent="onCreateMeetup">
            <v-container>
              <v-layout row>
                <v-flex xs12>
                  <form action="">
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          name="title"
                          label="Title"
                          v-model="title"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          name="location"
                          label="Location"
                          v-model="location"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          name="image"
                          label="Image"
                          v-model="image"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row justify-center>
                      <v-flex xs12 >
                        <img :src="image" alt="" width="100%">
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          name="description"
                          label="Description"
                          v-model="description"
                          multi-line
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </form>
                </v-flex>
              </v-layout>
            </v-container>
            <v-card-actions>
              <v-layout>
                <v-flex xs12>
                  <v-btn color="primary" type="submit">Create</v-btn>
                </v-flex>
              </v-layout>
            </v-card-actions>
          </form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        location: '',
        description: '',
        image: ''
      }
    },
    methods: {
      onCreateMeetup () {
        const meetupData = {
          title: this.title,
          location: this.location,
          image: this.image,
          description: this.description,
          date: new Date()
        }
        this.$store.dispatch('createMeetup', meetupData)
        console.log('event')
      }
    }
  }
</script>

<style scoped>

</style>
