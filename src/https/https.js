import querystring from "querystring";

const https = {
  post: (url, params, config) => {
    console.log("A request was made with, ", url, params, config);

    return new Promise(resolve => {
      const { username } = querystring.parse(params);
      resolve({
        data: {
          username,
          name: "Fermin",
          lastName: "Blanco",
          token: "my-token"
        }
      });
    });
  },
  cancelToken: (url, config) => {
    console.log("A request to make a token invalid was made, ", url, config);

    return new Promise(resolve => {
      resolve({ data: { message: "token was invalid" } });
    });
  }
};

export { https };
