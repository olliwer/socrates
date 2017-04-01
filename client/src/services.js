export async function authenticateService(oauth2Response) {
  return fetch('http://127.0.0.1:9000/api/authenticate/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: oauth2Response.profileObj.givenName,
      email: oauth2Response.profileObj.email,
      last_name: oauth2Response.profileObj.familyName,
      google_id: oauth2Response.googleId,
      access_token: oauth2Response.accessToken
    })
  }).then((response) => response.json());
}

export async function largePictureService() {
  // simulate an asynchronous operation
  return new Promise((res) => setTimeout(res, 1000)).then(() => {
    return {name: 'Anttila', 'path': 'http://127.0.0.1:9000/static/media/uploads/anttila.png', owner: 'Veikko Kovanen'};
  });
}

export async function smallPictureService(page) {
  return fetch('http://127.0.0.1:9000/api/pictures/?page=' + page, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then((response) => response.json());
}
