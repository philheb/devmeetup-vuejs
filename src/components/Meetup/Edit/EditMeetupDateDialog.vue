<template>
  <v-dialog width="350px" persistent v-model="editDialog">
    <v-btn small color="secondary" slot="activator">
      <v-icon left>access_time</v-icon>Edit Time & Date
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title class="headline">Edit Meetup's Date</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        
        <v-layout row wrap>
          <v-flex xs12>
            <v-date-picker 
              v-model="editableDate"
              style="width: 100%"
              actions>
            </v-date-picker>  
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12>
            <v-time-picker
              v-model="editableTime"
              style="width: 100%"
              actions>
            </v-time-picker>  
          </v-flex>
        </v-layout> 

        <v-layout row wrap class="text-xs-center">
          <v-flex xs12>
            <v-card-actions>
              <v-btn  
                flat
                color="error"
                @click="editDialog = false">
                Cancel
              </v-btn>
              <v-btn
                flat
                color="accent"
                @click="onSaveChanges">
                Save
              </v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ['meetup'],
    data () {
      return {
        editDialog: false,
        editableDate: null,
        editableTime: null
      }
    },
    methods: {
      onSaveChanges () {
        const newDate = this.editableDate
        const newTime = this.editableTime
        this.$store.dispatch('updateMeetupData', {
          id: this.meetup.id,
          date: newDate,
          time: newTime
        })
      }
    },
    created () {
      this.editableDate = this.meetup.date
      this.editableTime = this.meetup.time
    }
  }
</script>
