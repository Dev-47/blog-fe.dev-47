import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.responseEncoding = "utf8";

export const client = axios.create({});
