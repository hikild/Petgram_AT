export const API_URL = 'https://petgram-api.azurewebsites.net';

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/auth',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + '/auth',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + '/v1/pet',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_LOGGED(token) {
  return {
    url: API_URL + '/v1/pet/logged',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    url: API_URL + '/v1/pet',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function PHOTO_POST(formData, token) {
  return {
    url: API_URL + '/v1/post',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: formData

    },
  };
}

export function PHOTOS_GET() {
  return {
    url: `${API_URL}/v1/post`,
    options: {
      method: 'GET',
      headers: {
        // Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    },
  };
}

// export function PHOTO_GET(id) {
//   // return {
//   //   url: `${API_URL}/api/photo/${id}`,
//   //   options: {
//   //     method: 'GET',
//   //     cache: 'no-store',
//   //   },
//   // };
// }

export function COMMENT_POST(body) {
  return {
    url: `${API_URL}/v1/post`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      body: JSON.stringify(body),
    },
  };
}

export function PHOTO_DELETE() {
  return {
    url: `${API_URL}/v1/post`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
  };
}

export function PASSWORD_LOST(body) {
  // return {
  //   url: API_URL + '/api/password/lost',
  //   options: {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(body),
  //   },
  // };
}

export function PASSWORD_RESET(body) {
  // return {
  //   url: API_URL + '/api/password/reset',
  //   options: {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(body),
  //   },
  // };
}

export function STATS_GET() {
  // return {
  //   url: API_URL + '/api/stats',
  //   options: {
  //     method: 'GET',
  //     headers: {
  //       Authorization: 'Bearer ' + window.localStorage.getItem('token'),
  //     },
  //   },
  // };
}
