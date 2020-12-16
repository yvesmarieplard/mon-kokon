import http from "../http-common";

class OffersDataService {
  getAll() {
    return http.get("/offers");
  }

  get(id) {
    return http.get(`/offers/${id}`);
  }

  create(data) {
    return http.post("/offers", data);
  }

  update(id, data) {
    return http.put(`/offers/${id}`, data);
  }

  delete(id) {
    return http.delete(`/offers/${id}`);
  }

  deleteAll() {
    return http.delete(`/offers`);
  }

  findBySuburb(suburb) {
    return http.get(`/offers?suburb=${suburb}`);
  }
}

export default new OffersDataService();
