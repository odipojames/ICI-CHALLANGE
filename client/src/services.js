import http from "./baseURL";

const getAll = () => {
  return http.get("/drug");
};

const get = id => {
  return http.get(`/drug/${id}`);
};

const create = data => {
  return http.post("/drug", data);
};

const update = (id, data) => {
  return http.put(`/drug/${id}`, data);
};

const remove = id => {
  return http.delete(`/drug/${id}`);
};


export default {
  getAll,
  get,
  create,
  update,
  remove,
};
