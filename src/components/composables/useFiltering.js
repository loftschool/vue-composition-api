import {ref, computed} from "vue";

export default (repos) => {
  const filter = ref('all');

  const categorisedRepos = computed(() => {
    return repos[filter.value].items;
  });

  const changeFilter = filterName => {
    filter.value = filterName;
  }

  return {
    filter,
    categorisedRepos,
    changeFilter
  }
}
