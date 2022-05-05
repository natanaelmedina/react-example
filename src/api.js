import axios from "axios";

const _Api = axios.create({
  baseURL: "https://localhost:44386/api",
});
export default _Api;
