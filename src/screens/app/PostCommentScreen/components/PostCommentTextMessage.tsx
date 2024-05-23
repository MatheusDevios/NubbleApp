import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {usePostCommentCreatePost} from '@domain';

import {TextMessage} from '@components';

interface Props {
  postId: number;
}

export function PostCommentTextMessage({postId}: Props) {
  const [message, setMessage] = useState('');
  const {createPost} = usePostCommentCreatePost(postId);

  const onPressSend = async () => {
    await createPost(message);
    setMessage('');
    Keyboard.dismiss();
  };

  return (
    <TextMessage
      placeholder="Add a comment..."
      onPressSend={onPressSend}
      value={message}
      onChangeText={setMessage}
    />
  );
}
