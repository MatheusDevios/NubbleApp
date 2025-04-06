/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {ToastPosition, useToast, useToastService} from '@services';

import {ToastContent} from './components/ToastContent';

const DEFAULT_DURATION = 3000;

export function Toast() {
  const toast = useToast();
  const {hideToast} = useToastService();

  const position: ToastPosition = toast?.position || 'top';

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const runEntranceAnimation = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const runExitAnimation = useCallback(
    (callback: Animated.EndCallback) => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(callback);
    },
    [fadeAnim],
  );

  useEffect(() => {
    if (toast) {
      runEntranceAnimation();

      setTimeout(() => {
        runExitAnimation(hideToast);
      }, toast.duration || DEFAULT_DURATION);
    }
  }, [hideToast, runEntranceAnimation, runExitAnimation, toast]);

  if (!toast) {
    return null;
  }

  return (
    <Animated.View
      testID={'toast-message'}
      style={{
        position: 'absolute',
        alignSelf: 'center',
        opacity: fadeAnim,
        [position]: 100,
      }}>
      <ToastContent toast={toast} />
    </Animated.View>
  );
}
