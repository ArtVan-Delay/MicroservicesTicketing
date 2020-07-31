import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined") {
    // Server
    return axios.create({
      //baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      // Had to change baseURL to match currently deployed nginx service
      // Note thw use of default as namespace since I am using helm to deploy the 
      // nginx services
      baseURL:
        "http://nginx-ingress-1595866122-controller.default.svc.cluster.local",
      headers: req.headers,
    });
  } else {
    // Client
    return axios.create({
      baseURL: "/",
    });
  }
};
