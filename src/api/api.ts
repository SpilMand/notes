import axios, { Axios } from "axios";

const apiUrl = 'https://dist.nd.ru/api/';

export async function reg(params: object) {
  try {
    const response = await axios.post(`${apiUrl}reg`, {
      ...params
    });
    return { type: 'good', data: response }
  } catch(error: any) {
    return { type: 'error', data: error };
  }
}

export async function auth(params: object) {
  try {
    const response: { type: string, data: { data: { accessToken: string } } } = await axios.post(`${apiUrl}auth`, {
      ...params
    });
    return { type: 'good', data: response };
  } catch(error: any) {
    return { type: 'error', data: error };
  }
}

export async function getUser(token: string | null) {
  try {
    const response = await axios.get(`${apiUrl}auth`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response;
  } catch(error) {
    console.log(error);
  }
}

export async function exit(token: string | null) {
  try {
    const response = await axios.delete(`${apiUrl}auth`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log(response);
    
  } catch(error) {
    console.log(error);
  }
}

export async function getNotes(token: string | null) {
  try {
    const response = await axios.get(`${apiUrl}notes`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response;
  } catch(error) {
    console.log(error);
  }
}

export async function createNote(params: object, token: string | null) {
  try {
    const response = await axios.post(`${apiUrl}notes`, {
      ...params
    },
    {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return response;
  } catch(error) {
    console.log(error);
  }
}

export async function deleteNote(id: number, token: string | null) {
  try {
    const response = await axios.delete(`${apiUrl}notes/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  } catch(error) {
    console.log(error);
  }
}
