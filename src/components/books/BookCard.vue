<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  props: {
    book: Object,
  },
};
</script>

<template>
  <div class="col mt-5 mb-5">
    <div class="card h-100">
      <div class="card-body">
        <h4>Id: {{ book.id }}</h4>
        <h5>Title: {{ book.title }}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Author: {{ book.author }}</li>
        <li class="list-group-item">Date: {{ book.date }}</li>
        <li class="list-group-item">
          Link: <a href=" #">{{ book.link }}</a>
        </li>
        <li class="list-group-item">Descrizione: {{ book.description }}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
