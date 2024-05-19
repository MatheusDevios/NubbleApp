import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.mkcz7T1ORM0miLI-RaJtYZyQSaEtSKI2iTzRm50SK7Xov2nfHIR1IFtZen-3',
  },
});
