import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyCIduhuCE1JdDH187pp4-_iZf_6Gl2QKT0",
  version: "weekly",
  libraries: ["places"],
});
export default loader;
