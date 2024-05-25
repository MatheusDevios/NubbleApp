import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer NA.b4n8C1Up7xDyyxYqMoQlYMJPRUNGuzS51nK80vHovSBXqQe8q3QWACoK7-ke',
  },
});
