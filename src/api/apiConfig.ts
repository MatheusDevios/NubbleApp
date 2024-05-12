import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.iyXo5lxlyKPZSeMWyi4s_rsvoqM73bq1k8bMiLrubMkh9VmKt7RzMYNkj5d_',
  },
});
