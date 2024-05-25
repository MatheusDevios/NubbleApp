import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {usePostCommentCreatePost} from '@domain';

import {TextMessage} from '@components';

interface Props {
  postId: number;
  onAddComment: () => void;
}

export function PostCommentTextMessage({postId, onAddComment}: Props) {
  const [message, setMessage] = useState('');
  const {createPost} = usePostCommentCreatePost(postId, {
    onSuccess: () => {
      setMessage('');
      onAddComment();
      Keyboard.dismiss();
    },
  });

  return (
    <TextMessage
      placeholder="Add a comment..."
      onPressSend={() => createPost(message)}
      value={message}
      onChangeText={setMessage}
    />
  );
}
