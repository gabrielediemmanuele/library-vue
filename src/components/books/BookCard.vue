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
    detailView: Boolean,
  },
};
</script>

<template>
  <div class="col mt-5 mb-5">
    <div class="card h-100">
      <div class="card-body">
        <h4><strong>Id:</strong> {{ book.id }}</h4>
        <h5 class="text-success"><strong>Title:</strong> {{ book.title }}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <strong>Autore:</strong> {{ book.author }}
        </li>
        <li class="list-group-item">
          <strong>Genere:</strong> {{ book.genre.name }}
        </li>
        <li class="list-group-item">
          <strong>Edizione:</strong> {{ book.edition }}
        </li>
        <li class="list-group-item">
          <strong>Editore:</strong> {{ book.editor_house }}
        </li>
        <li class="list-group-item">
          <strong>Pagine:</strong> {{ book.pages }}
        </li>
        <li class="list-group-item">
          <strong>Numero di Serie:</strong> {{ book.series_number }}
        </li>
        <li class="list-group-item">
          <strong>Numero di Copie:</strong> {{ book.copies_number }}
        </li>
        <li class="list-group-item">
          <strong>Prezzo:</strong> {{ book.price }}
        </li>
      </ul>
    </div>
    <div class="card-footer" v-if="!detailView">
      <router-link
        :to="{ name: 'library', params: { id: book.id } }"
        class="btn btn-primary mt-1"
        >Vedi</router-link
      >
    </div>

    <div class="card-footer" v-if="detailView">
      <router-link :to="{ name: 'library' }" class="btn btn-danger mt-1"
        >Torna alla libreria -></router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
