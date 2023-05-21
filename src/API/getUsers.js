export const getUsers = async (page = 1) => {
  return await fetch(
    `https://64673f692ea3cae8dc294a1e.mockapi.io/folower?page=${page}&limit=6`
  ).then((resp) => resp.json());
};
