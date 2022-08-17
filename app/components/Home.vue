<template>
  <Page>
    <ActionBar>
      <Label text="Adarsh" />

      <Label class="fas" text.decode="&#xf279;"></Label>
    </ActionBar>

    <GridLayout>
      <Label class="info" :text="message" @tap="logMessage" />
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';

export default Vue.extend({
  computed: {
    message() {
      return 'World';
    },
  },

  methods: {
    logMessage() {
      console.log('You have tapped the message!');
    },
  },
});
</script>

<style scoped>
.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}

.fas {
  font-family: 'Font Awesome 5 Free', 'fa-solid-900';
}
</style>
