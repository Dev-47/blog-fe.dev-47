import axios from "axios";

axios.defaults.baseURL = "https://dev-47-blog.herokuapp.com/";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.responseEncoding = "utf8";

export const client = axios.create({});
