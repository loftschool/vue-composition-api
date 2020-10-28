<template>
  <div>
    <button @click="changeFilter('all')">*</button>
    <button @click="changeFilter('react')">React</button>
    <button @click="changeFilter('vue')">Vue</button>
    <button @click="changeFilter('angular')">Angular</button>
  </div>
  <br />
  <div>
    <button @click="showUnProcessedItems">all</button>
    <button @click="sortItems">sort</button>
    <button @click="filterItems">filter</button>
  </div>

  <ul class="respos">
    <li v-for="repo in processedRepos">
      <span> {{ repo.full_name }} </span> <b v-if="repo.private">(private)</b>
    </li>
  </ul>
</template>

<script>
import useRepos from "./composables/useRepositories";
import useFiltration from "./composables/useFiltration";

import { ref, onMounted } from "vue";

export default {
  name: "Inner",
  data() {
    return {
      // repos: [],
      // processedRepos: [],
      filter: "all",
    };
  },
  setup() {
    const reposComposable = useRepos();

    return {
      repos: reposComposable.repos,
      ...useFiltration(reposComposable.repos)
    };
  },
  computed: {
    categorisedRepos() {
      return this.repos[this.filter].items;
    },
  },
  methods: {
    changeFilter(filterName) {
      this.filter = filterName;
    },

    flatenTheRepos(reposCollection) {
      const result = [];
      for (const reposCategory in reposCollection) {
        result.push(reposCollection[reposCategory].items);
      }
      return result.flat();
    },
    filterItems() {
      this.processedRepos = this.categorisedRepos.filter(
        (repo) => repo.private
      );
    },
    showUnProcessedItems() {
      this.processedRepos = this.categorisedRepos;
    },
    sortItems() {
      this.processedRepos = [...this.categorisedRepos].sort((a, b) => {
        if (a.forks > b.forks) {
          return -1;
        }
        if (a.forks < b.forks) {
          return 1;
        }
        return 0;
      });
    },
  },
  watch: {
    filter(value) {
      switch (value) {
        case "all":
          this.processedRepos = this.flatenTheRepos(this.repos);
          break;
        default:
          this.processedRepos = this.categorisedRepos;
      }
    },
  },
  mounted() {
    // this.repos = data;
    this.processedRepos = this.flatenTheRepos(this.repos);
  },
};
</script>
