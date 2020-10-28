import { ref, onMounted } from "vue";

export default (reposCollection) => {
  const processedRepos = ref([]);

  const flatenTheRepos = (reposCollection) => {
    const result = [];
    for (const reposCategory in reposCollection) {
      result.push(reposCollection[reposCategory].items);
    }
    return result.flat();
  };

  onMounted(() => {
    processedRepos.value = flatenTheRepos(reposCollection);
  });

  return {
    processedRepos
  }
};
