import resful from "../../services/resful.js";
export const categorySV = {
  getInfo: async function(data, next) {
    let res = await resful.post("/app/create_category", data);
    next(res);
  },
};
