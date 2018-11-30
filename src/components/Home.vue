<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn class="primary" large router to="/meetups">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn class="primary" large router to="/meetup/new">Organize Meetup</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-4">
            <v-flex xs12>
                <v-carousel style="cursor: pointer">
                    <v-carousel-item
                    v-for="meetup in meetups"
                    :key="meetup.id"
                    :src="meetup.imageUrl"
                    @click="onLoadMeetup(meetup.id)">
                    <div class="title">
                        {{ meetup.title }}
                    </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>        
        </v-layout>
        <v-layout row wrap class="mt-4">
            <v-flex xs12 class="text-xs-center">
                <p>Join our awesome meetup!</p>
            </v-flex>
        </v-layout>
    </v-container> 
</template>

<script>
    export default {
        computed: {
          meetups() {
            return this.$store.getters.featuredMeetups
          }
        },
        methods: {
            onLoadMeetup(id) {
               this.$router.push('/meetup/' + id) 
            }
        }
    }
</script>

<style>
    .title {
        bottom: 50px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 2em;
        padding: 20px;
        text-align: center;
    }
</style>