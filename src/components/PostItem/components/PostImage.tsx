/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Dimensions} from 'react-native';

import {Post} from '@domain';

type PostImageProps = Pick<Post, 'imageURL'>;

export function PostImage({imageURL}: PostImageProps) {
  return (
    <Image
      source={{uri: imageURL}}
      resizeMode="cover"
      style={{
        width: Dimensions.get('screen').width,
        height: 300,
        marginHorizontal: -24,
      }}
    />
  );
}
