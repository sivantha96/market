import api from './';
import { Endpoint, Method } from 'app/constants/ApiConstants';

export function loginUser(email, password) {
  return api(Endpoint.LOGIN, Method.POST, { email, password });
}
