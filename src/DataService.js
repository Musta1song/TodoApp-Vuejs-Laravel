import http from "./http";

class DataService {
  getAll() {
    return http.get("vuetodos");
  }

  create(data) {
    return http.post("vuetodos/", data);
  }

  update(id) {
    return http.put(`vuetodos/${id}`);
  }

  delete(id) {
    return http.delete(`vuetodos/${id}`);
  }

}

export default new DataService();