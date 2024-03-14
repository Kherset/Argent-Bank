export const fetchUserProfile = async (token) => {
  return fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const userLogin = async (user) => {
  return fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};

export const editProfile = async (token, firstName, lastName) => {
  return fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
    }),
  });
  // const result = await response.json();
  // console.log(result);
};
