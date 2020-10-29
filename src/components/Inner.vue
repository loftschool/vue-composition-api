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

  <ul class="repos">
    <li v-for="repo in processedRepos">
      <span> {{ repo.full_name }} </span> <b v-if="repo.private">(private)</b>
    </li>
  </ul>
</template>

<script>
import useRepos from "./composables/useRepos";
import useFiltering from "./composables/useFiltering";
import useSorting from "./composables/useSorting";

export default {
  name: "Inner",
  setup() {
    const { repos } = useRepos();

    const {
      filter,
      categorisedRepos,
      changeFilter,
      filterItems,
      processedRepos,
      showUnProcessedItems,
    } = useFiltering(repos);

    const { sortItems } = useSorting(processedRepos, categorisedRepos);

    return {
      repos,
      filter,
      changeFilter,
      processedRepos,
      showUnProcessedItems,
      filterItems,
      sortItems,
    };
  },
};
</script>
