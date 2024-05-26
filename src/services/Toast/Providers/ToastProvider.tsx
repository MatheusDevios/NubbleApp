import React, {createContext, PropsWithChildren, useState} from 'react';

import {ToastService, Toast} from '../toastTypes';

export const ToastContext = createContext<ToastService>({
  toast: null,
  showToast: () => {},
  hideToast: () => {},
});

export const ToastProvider = ({children}: PropsWithChildren<{}>) => {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  const showToast = (_toast: Toast) => {
    setToast(_toast);
  };

  const hideToast = () => {
    setToast(null);
  };
  return (
    <ToastContext.Provider value={{toast, showToast, hideToast}}>
      {children}
    </ToastContext.Provider>
  );
};
