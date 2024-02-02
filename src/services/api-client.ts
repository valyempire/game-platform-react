import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2780a6c296764150bfc512c2e5c0ef9b",
  },
});
