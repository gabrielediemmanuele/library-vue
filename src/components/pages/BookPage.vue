<script>
import BookCard from "../books/BookCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      book: {},
      baseUrl: "http://127.0.0.1:8000/api/",
    };
  },

  components: {
    BookCard,
  },

  created() {
    axios
      .get(this.baseUrl + "books/" + this.$route.params.id)
      .then((response) => {
        this.book = response.data;
      });
  },
};
</script>

<template>
  <div class="container">
    <BookCard :book="book" :detailView="true" v-if="book"> </BookCard>
  </div>
</template>

<style lang="scss" scoped></style>
