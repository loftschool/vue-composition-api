import { ref, computed, onMounted, watch } from "vue";

export default (repos) => {
  const filter = ref("all");
  const processedRepos = ref([]);

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

  onMounted(() => {
    processedRepos.value = flatenTheRepos(repos);
  });


  return {
    filter,
    categorisedRepos,
    changeFilter,
    flatenTheRepos,
    processedRepos
  };
};
