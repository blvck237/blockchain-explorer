import axios from "axios";

const defaultHeaders = {
  "Content-Type": "application/json"
};
const config = {
  baseURL: "http://localhost:3000",
  timeout: 60000,
  headers: defaultHeaders
};

const request = axios.create(config);

export { request };
