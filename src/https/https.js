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
  getUsers: async (url, config) => {
    console.log("A request for users was made, ", url, config);

    const { results } = await fetch(
      "https://randomuser.me/api/?results=20&seed=md175&inc=name,location,email,phone,id,picture,dob"
    ).then(res => {
      return res.json();
    });

    return { data: results };
  },
  getUser: (url, config) => {
    console.log("A request for user was made, ", url, config);

    return new Promise(resolve => {
      resolve({ data: { id: url } });
    });
  }
};

export { https };
