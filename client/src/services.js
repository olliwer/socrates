export async function checkAuthenticationService() {
  /* returns user object or message if not authenticated */
  return fetch('http://127.0.0.1:9000/api/authenticate/', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then((response) => response.json());
}

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
  return fetch('http://127.0.0.1:9000/api/pictures/winner/', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then((response) => response.json());
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

export async function voteService(vote) {
  return fetch('http://127.0.0.1:9000/api/votes/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      picture: vote.picture,
      value: vote.value,
      token: vote.token
    })
  }).then((response) => response.json());
}
