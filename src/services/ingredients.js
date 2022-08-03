import { http } from "./config";

export default {
  list: () => {
    return http.get("ingredients");
  },

  create: (data) => {
    return http.post("burgers", data);
  },
};
