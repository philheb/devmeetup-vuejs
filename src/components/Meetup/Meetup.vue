<template>
    <v-container>
		<v-layout row wrap ma-4 v-if="loading">
			<v-flex xs12 class="text-xs-center">
				<v-progress-circular 
					indeterminate 
					color="primary"
					:width="7"
					:size="70">
				</v-progress-circular>
			</v-flex>
        </v-layout>
        <v-layout row wrap v-else>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <div class="headline">{{ meetup.title }}</div>
                        <template v-if="userIsCreator">
                          <v-spacer></v-spacer>
                          <app-edit-meetup :meetup="meetup">
                          </app-edit-meetup>
                        </template>
                    </v-card-title>
                
                    <v-img
                        :src="meetup.imageUrl"
                        height="400px"
                        >
                    </v-img>
                    <v-card-text>
                        <div>{{ meetup.date }} at {{ meetup.time }} - {{ meetup.location }}</div>
                        <div><app-edit-meetup-date :meetup="meetup"></app-edit-meetup-date></div>
                        <div>{{ meetup.description }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat large color="primary">Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>    
    </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.id)
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      userIsCreator () {
        if (!this.userIsAuthenticated) {
          return false
        }
        return this.$store.getters.user.id === this.meetup.creatorId
      },
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>