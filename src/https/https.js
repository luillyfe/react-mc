import querystring from "querystring";

const https = {
  post: (url, params, config) => {
    console.log("A request was made with, ", url, params, config);

    return new Promise((resolve, reject) => {
      const { username } = querystring.parse(params);
      resolve({ data: { username, name: "Fermin", lastName: "Blanco" } });
    });
  }
};

export { https };
