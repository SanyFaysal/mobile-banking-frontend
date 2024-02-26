export const getToken = () => {
  return localStorage.getItem("accessToken");
};

export const setToken = (token) => {
  if (token) {
    localStorage.setItem("accessToken", token);
  } else {
    console.log("Token not found");
  }
};
