import { http } from "./config";

export default {
  list: () => {
    return http.get("status");
  },

  update: (id) => {
    return http.patch(`burgers/${id}`, id);
  },

  delete: (id) => {
    return http.delete(`burgers/${id}`, {data: id});
  },
};
