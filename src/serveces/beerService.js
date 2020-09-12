import http from './httpService';
import { apiUrl } from '../config.json';
const apiEndpoint = apiUrl ;
export function getbeers() {
    return http.get(apiEndpoint)
}


