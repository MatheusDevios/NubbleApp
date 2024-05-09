import {PageAPI} from '@api';

import {PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Mg.iyXo5lxlyKPZSeMWyi4s_rsvoqM73bq1k8bMiLrubMkh9VmKt7RzMYNkj5d_',
    },
  });

  let data: PageAPI<PostAPI> = await response.json();
  // console.log(data);
  return data;
}

export const postApi = {
  getList,
};
