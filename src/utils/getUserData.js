const checkFetchResponse = res => {
  if (res.status === 200) {
    return res.json();
  } else {
    console.error(
      `Error fetching user data from GitHub. Response: ${res.status}`
    );
  }
};

export const getUserData = username => {
  const url = `https://api.github.com/users/${username}`;
  return fetch(url)
    .then(checkFetchResponse)
    .catch(err => {
      throw new Error(`fetch getUserData failed. ${err}`);
    });
};
