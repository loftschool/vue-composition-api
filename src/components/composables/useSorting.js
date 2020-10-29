import { ref } from "vue";

export default (processedRepos, categorisedRepos) => {
  const sortItems = () => {
    processedRepos.value = categorisedRepos.value.sort((a, b) => {
      if (a.forks > b.forks) {
        return -1;
      }
      if (a.forks < b.forks) {
        return 1;
      }
      return 0;
    });
  };

  return {
    sortItems,
  };
};
