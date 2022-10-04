const app = Vue.createApp({
  data() {
    return {
      voted: false,
      pick: 0,
    };
  },
  methods: {
    submitRating() {
      if (this.pick > 0) {
        this.voted = true;
      }
    },
  },
});

const mountedApp = app.mount('#app');
