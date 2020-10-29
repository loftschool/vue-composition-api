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

<!--  <pre>{{ processedRepos }}</pre>-->

  <ul class="repos">
    <li v-for="repo in processedRepos">
      <span> {{ repo.full_name }} </span> <b v-if="repo.private">(private)</b>
    </li>
  </ul>
</template>

<script>
import useRepos from "./composables/useRepos";
import useFiltering from "./composables/useFiltering";

export default {
  name: "Inner",
  data() {
    return {
      processedRepos: [],
    };
  },
  setup() {
    const { repos } = useRepos();

    return {
      repos,
      ...useFiltering(repos),
    };
  },
  methods: {
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
};
</script>
