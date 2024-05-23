export interface PostComment {
  id: number; // 117;
  message: string;
  createdAt: string; // '2023-07-24T20:38:56.192+10:00';
  createdAtRelative: string; // '1 d';
  author: {
    id: number; // 6;
    profileURL: string;
    name: string;
    userName: string;
  };
}

export interface PostCommentAPI {
  id: number;
  message: string;
  user_id: number;
  post_id: number;
  created_at: string;
  updated_at: string;
  //   post: Post;
  user: {
    id: number; // 6;
    first_name: string; // 'Samuel';
    last_name: string; // 'Vilar';
    username: string; //  'samuelvilar';
    email: string; //'samu.vilar@coffstack.com';
    profile_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/5-samuel.png';
    is_online: boolean; //false;
    full_name: string; //'Samuel Vilar';
  };
  meta: any;
}

//   "post": {
//     "id": 1,
//     "text": "Bom dia!",
//     "user_id": 1,
//     "image_url": "https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post1.jpg",
//     "is_fixed": false,
//     "is_activated": true,
//     "created_at": "2024-05-19T18:31:24.849+01:00",
//     "updated_at": "2024-05-19T18:31:24.854+01:00",
//     "status": "published",
//     "meta": {}
//   },
