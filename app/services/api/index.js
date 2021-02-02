import environment from 'app/constants/EnvConstants';
import { HttpError } from 'app/utils';

export default async function api(url, method, body) {
  const requestUrl = environment.BASE_URL + url;
  try {
    const response = await fetch(requestUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (data.error) {
      throw new HttpError(data.status, data.message);
    } else {
      return data;
    }
  } catch (error) {
    throw new HttpError(error.status, error.message);
  }
}
