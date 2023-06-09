export const getFolow = async () => {
  return await fetch(
    `https://64673f692ea3cae8dc294a1e.mockapi.io/folower`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error("Oops, something went wrong 8-("));
  });
};
