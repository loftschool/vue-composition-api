import { ref, computed, onMounted, watch } from "vue";

export default (repos) => {
  const filter = ref("all");
  let processedRepos = ref([]);

  const categorisedRepos = computed(() => {
    return repos[filter.value].items;
  });

  const changeFilter = (filterName) => {
    filter.value = filterName;
  };

  const flatenTheRepos = (reposCollection) => {
    const result = [];
    for (const reposCategory in reposCollection) {
      result.push(reposCollection[reposCategory].items);
    }
    return result.flat();
  };

  const filterItems = () => {
    processedRepos.value = categorisedRepos.value.filter(
      (repo) => repo.private
    );
  }

  const showUnProcessedItems = () => {
    processedRepos.value = categorisedRepos.value;
  }

  onMounted(() => {
    processedRepos.value = flatenTheRepos(repos);
    console.log('mounted');
  });


  watch(filter, (value) => {
    switch (value) {
      case "all":
        processedRepos.value = flatenTheRepos(repos);
        break;
      default:
        processedRepos.value = categorisedRepos.value;
    }
  });

  return {
    filter,
    categorisedRepos,
    changeFilter,
    flatenTheRepos,
    processedRepos,
    filterItems,
    showUnProcessedItems
  };
};
