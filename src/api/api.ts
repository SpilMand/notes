import axios from "axios";

const apiUrl = 'https://dist.nd.ru/api/';

export async function reg(params) {
  try {
    const response = await axios.post(`${apiUrl}reg`, {
      ...params
    });
    return { type: 'good', data: response }
  } catch(error) {
    return { type: 'error', message: error.response.data.message };
  }
}

export async function auth(params) {
  try {
    const response = await axios.post(`${apiUrl}auth`, {
      ...params
    });
    return { type: 'good', data: response };
  } catch(error) {
    return { type: 'error', message: error.response.data.message };
  }
}

export async function exit(token) {
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

export async function getNotes(token) {
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
