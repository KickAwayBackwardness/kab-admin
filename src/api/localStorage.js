export const tokenLocalStorage = {
  get: () =>
    localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null,
  set: (token) => {
    const dataJson = JSON.stringify(token);
    localStorage.setItem("token", dataJson);
  },
  remove: () => {
    localStorage.removeItem("token");
  },
};
