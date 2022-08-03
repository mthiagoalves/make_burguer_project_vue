import { http } from "./config";

export default {
  list: () => {
    return http.get("burgers");
  },

  delete: (id) => {
    return http.delete(`burgers/${id}`, { data: id });
  },
};
