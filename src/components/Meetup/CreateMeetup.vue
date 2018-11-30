<template>
    <v-container>
      <v-layout row>
        <v-flex xs10 sm6 offset-xs1 offset-sm3>
          <div class="headline">Create a new Meetup</div>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <form>
            <v-layout row>
              <v-flex xs10 sm6 offset-xs1 offset-sm3>
                <v-text-field
                  name="title"
                  label="Title"
                  id="title"
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
                  required>
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs10 sm6 offset-xs1 offset-sm3>
                <v-text-field
                  name="imageUrl"
                  label="Image URL"
                  id="image-url"
                  required>
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs10 sm6 offset-xs1 offset-sm3>
                <v-textarea
                  name="description"
                  label="Description"
                  id="description"
                  auto-grow
                  rows="1"
                  required>
                </v-textarea>
              </v-flex>
            </v-layout>
          </form>
        </v-flex>
      </v-layout>
    </v-container> 
</template>