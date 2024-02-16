const app = Vue.createApp({
  data() {
    return {
      // greeting: "Hello World!",
      // count: 0,
      // isActive: false,
      isFiltered: false,
      books: [
        {
          title: "Intro to Algorithms",
          author: "Bob Smith",
          year: 1997,
          isFavourite: false,
        },

        {
          title: "Database Fundamentals",
          author: "John Doe",
          year: 2001,
          isFavourite: false,
        },

        {
          title: "Creating WEB APIs",
          author: "Les Jackson",
          year: 2007,
          isFavourite: true,
        },
      ],
    };
  },

  methods: {
    toggle() {
      this.isActive = !this.isActive;
      this.increment();
    },

    increment() {
      this.count += 1;
    },

    decrement() {
      this.count -= 1;
    },

    setFavourite(book) {
      book.isFavourite = !book.isFavourite;
    },

    showFave() {
      this.isFiltered = !this.isFiltered;
    },
  },

  computed: {
    //return all books set as favourite
    filteredBooks() {
      return this.books.filter((book) => book.isFavourite);
    },
  },

  // mounted() {
  //   setTimeout(() => {
  //     this.greeting = "Hello, vue!";
  //   }, 3000);
  // },
});

app.mount("#app");
