const https = {
  post: (url, params, config) => {
    console.log("A request was made with, ", url, params, config);

    return new Promise((resolve, reject) => {
      resolve({ username: "fermin", password: "my-password" });
    });
  }
};
