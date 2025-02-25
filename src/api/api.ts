import axios from "axios";

const apiUrl = 'https://dist.nd.ru/';

export async function reg(params) {
  try {
    const response = await axios.post(`${apiUrl}api/reg`, {
      ...params
    });
    console.log(response);
  } catch(error) {
    console.log(error);
  }
}