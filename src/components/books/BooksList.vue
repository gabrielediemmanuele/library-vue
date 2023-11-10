<script>
import BookCard from "./BookCard.vue";

import axios from "axios";

export default {
  data() {
    return {
      books: [],
      baseUrl: "http://127.0.0.1:8000/api/",
    };
  },

  components: { BookCard },

  methods: {
    fetchBooks(uri = this.baseUrl + "books") {
      axios.get(uri).then((response) => {
        this.books = response.data.data;
      });
    },
  },

  created() {
    this.fetchBooks();
  },
};
</script>

<template>
  <div class="container">
    <h2 class="mb-3">Project List</h2>

    <div class="row row-cols-3">
      <BookCard
        v-for="book in books"
        :detailView="false"
        :book="book"
      ></BookCard>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
