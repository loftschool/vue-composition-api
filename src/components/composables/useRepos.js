import { reactive } from "vue";
import data from "../../data.json";

export default () => {
  const repos = reactive(data);

  return {
    repos
  }
}
