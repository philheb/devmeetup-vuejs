<template>
    <v-container>
      <v-layout row>
        <v-flex xs10 sm6 offset-xs1 offset-sm3>
          <div class="headline">Create a new Meetup</div>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <form @submit.prevent="onCreateMeetup">
            <v-layout row>
              <v-flex xs10 sm6 offset-xs1 offset-sm3>
                <v-text-field
                  name="title"
                  label="Title"
                  id="title"
                  v-model="title"
                  :rules="[() => !!title || 'This field is required']"
                  required>
                </v-text-field>
              </v-flex>
            </v-layout>
            
            <v-layout row>
              <v-flex xs10 sm6 offset-xs1 offset-sm3>
                <v-text-field
                  name="location"
                  label="Location"
                  id="location"
                  v-model="location"
                  :rules="[() => !!location || 'This field is required']"
                  required>
                </v-text-field>
              </v-flex>
            </v-layout>
            
            <v-layout row>
              <v-flex xs10 sm6 offset-xs1 offset-sm3>
                <v-btn 
                  class="primary"
                  @click="onPickFile"
                  >Upload Image
                </v-btn>
                <input 
                  type="file" 
                  style="display: none"
                  ref="fileInput"
                  accept="image/*"
                  @change="onFilePicked">
              </v-flex>
            </v-layout>
            
            <v-layout row>
              <v-flex xs10 sm6 offset-xs1 offset-sm3>
                <v-img
                  :src="imageUrl"
                  height="300px">
                </v-img>
              </v-flex>
            </v-layout>
            
            <v-layout row>
              <v-flex xs10 sm6 offset-xs1 offset-sm3>
                <v-textarea
                  name="description"
                  label="Description"
                  id="description"
                  v-model="description"
                  :rules="[() => !!description || 'This field is required']"
                  required>
                </v-textarea>
              </v-flex>
            </v-layout>
            
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <h2>Choose a Date & Time</h2>
              </v-flex>
            </v-layout>
            
            <v-layout row class="mb-2">
              <v-flex xs12 sm6 offset-sm3>
                <v-date-picker v-model="date"></v-date-picker>
              </v-flex>
            </v-layout>
            
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-time-picker v-model="time"></v-time-picker>
              </v-flex>
            </v-layout>
            
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-btn 
                  class="primary" 
                  :disabled="!formIsValid"
                  type="submit">
                  Create Meetup
                </v-btn>
              </v-flex>
            </v-layout>
        
          </form>
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
        imageUrl: '',
        description: '',
        date: '',
        time: '',
        image: null
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' &&
        this.location !== '' &&
        this.description !== ''
      }
    },
    methods: {
      onCreateMeetup () {
        if (!this.formIsValid) {
          return
        }
        if (!this.image) {
          return
        }
        const meetupData = {
          title: this.title,
          location: this.location,
          image: this.image,
          description: this.description,
          date: this.date,
          time: this.time
        }
        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/meetups')
      },
      onPickFile () {
        this.$refs.fileInput.click()
      },
      onFilePicked (event) {
        const files = event.target.files
        let filename = files[0].name
        if (filename.lastIndexOf('.') <= 0) {
          return alert('Please add a valid file')
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.image = files[0]
      }
    }
  }
</script>