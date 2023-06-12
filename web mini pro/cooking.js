const app = Vue.createApp({
    data() {
      return {
        recipes: [
          {
            id: 1,
            title: 'Mashmellow',
            image: '13.jpeg       ',
            description: 'A sweet white confection usually in the form of a spread or small spongy cylindrical pieces now usually made from corn syrup, sugar, albumen, and gelatin but formerly from the marshmallows root.',
            feedback: [],
            showFeedback: false
          },
          {
            id: 2,
            title: 'Toster cake',
            image: '10.jpeg',
            description: 'Cakes are bakery products that are rich in sugar, fat and eggs, and can be accompanied with a wide variety of inclusions like fruits and flavors such as vanilla extracts..',
            feedback: [],
            showFeedback: false
          }
        ],
        feedbackText: '',
        feedbackAuthor: ''
      };
    },
    methods: {
      showFeedback(recipe) {
        recipe.showFeedback = !recipe.showFeedback;
      },
      addFeedback(recipe) {
        if (this.feedbackText.trim() && this.feedbackAuthor.trim()) {
          recipe.feedback.push({
            id: Date.now(),
            text: this.feedbackText,
            author: this.feedbackAuthor
          });
          this.feedbackText = '';
          this.feedbackAuthor = '';
        }
      }
    }
  });
  
  app.mount('#app');
  