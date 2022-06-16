import http from "../http-common";

const getAll = () => {
  return http.get("/all");
};


const CountryService = {
  getAll,
};

export default CountryService;
