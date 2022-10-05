const app = Vue.createApp({
  data() {
    return {
      voted: false,
      pick: 0,
      inputs: [1, 2, 3, 4, 5],
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
