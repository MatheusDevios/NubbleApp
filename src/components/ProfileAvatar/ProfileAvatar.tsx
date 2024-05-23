import React from 'react';
import {Image} from 'react-native';

interface ProfileAvatarProps {
  imageURL: string;
  size?: number;
  borderRadius?: number;
}

export function ProfileAvatar({
  imageURL,
  /**
   * @default 32
   */
  size = 32,
  /**
   * @default 14
   */
  borderRadius = 14,
}: ProfileAvatarProps) {
  return (
    <Image
      source={{uri: imageURL}}
      style={{width: size, height: size, borderRadius: borderRadius}}
    />
  );
}
