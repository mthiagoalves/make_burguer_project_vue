import { http } from "./config";

export default {
  list: () => {
    return http.get("status");
  },

  update: (id) => {
    return http.patch(`burgers/${id}`, { data: id });
  },

  
};
