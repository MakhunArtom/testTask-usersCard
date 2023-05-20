export const changeFolow = async (userId, isFolow, followers) => {
  return await fetch(
    `https://64673f692ea3cae8dc294a1e.mockapi.io/folower/${userId}`,
    {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ isFolow, followers }),
    }
  );
};

// /users/{userId}

// fetch(`https://64673f692ea3cae8dc294a1e.mockapi.io/folower/${userId}`, {
//   method: "PATCH",
//   headers: { "content-type": "application/json" },
//   body: JSON.stringify({ completed: true }),
// })
//   .then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     // handle error
//   })
//   .then((task) => {
//     // Do something with updated task
//   })
//   .catch((error) => {
//     // handle error
//   });
