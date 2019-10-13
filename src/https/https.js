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
  },
  getUsers: (url, config) => {
    console.log("A request for users was made, ", url, config);

    return new Promise(resolve => {
      resolve({
        data: [
          {
            name: {
              title: "mr",
              first: "brad",
              last: "gibson"
            },
            email: "brad.gibson@example.com",
            phone: 1234567890
          }
        ]
      });
    });
  }
};

export { https };
