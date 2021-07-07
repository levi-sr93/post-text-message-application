import axios from 'axios';
import { credentials, urls } from '../utils/constants';

const apiClient = axios.create({
  baseURL: urls.REACT_API_URL,
})

apiClient.defaults.headers.common['ens-api-token'] = credentials.API_TOKEN;

export default apiClient;