import { onMounted, ref } from "vue";
import data from "../../data.json";

export default () => {
  const repos = ref([]);

  onMounted(() => {
    repos.value = data;
  });

  return {
    repos,
  };
};
