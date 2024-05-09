// import {postListMock} from './postListMock';
import {Post} from './postTypes';

async function getList(): Promise<Post[]> {
  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Mg.iyXo5lxlyKPZSeMWyi4s_rsvoqM73bq1k8bMiLrubMkh9VmKt7RzMYNkj5d_',
    },
  });

  let data = await response.json();

  //await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  // return postListMock;
}

export const postApi = {
  getList,
};
