<template>
    <v-container>
        <v-layout row wrap 
          v-for="meetup in meetups" 
          :key="meetup.id"
          class="mb-3">
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card class="secondary white--text">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs5 sm4 md3>
                                <v-img
                                    :src="meetup.imageUrl"
                                    height="170px"
                                    >
                                </v-img>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                                <v-card-title primary-title>
                                    <div>
                                        <div class="headline">{{ meetup.title }}</div>
                                        <div>{{ meetup.date }} at {{ meetup.time }}</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn left :to="'/meetup/' + meetup.id">
                                        <!-- <v-icon left>arrow_forward</v-icon> -->
                                        View Meetup
                                    </v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container> 
</template>

<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.loadedMeetups
      }
    }
  }
</script>