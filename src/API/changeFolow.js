export const changeFolow = async (userId, isFolow, followers) => {
  return await fetch(
    `https://64673f692ea3cae8dc294a1e.mockapi.io/folower/${userId}`,
    {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ isFolow, followers }),
    }
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error("Oops, something went wrong 8-("));
  });
};
