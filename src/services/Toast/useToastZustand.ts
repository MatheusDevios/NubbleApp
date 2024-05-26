import {create} from 'zustand';

import {ToastService} from './toastTypes';

const useToastStore = create<ToastService>(set => ({
  toast: null,
  showToast: toast => {
    set({toast: toast});
  },
  hideToast: () => {
    set({toast: null});
  },
}));

export function useToastZustand(): ToastService['toast'] {
  const context = useToastStore();
  if (!context) {
    throw new Error('Toast must be used within a ToastProvider');
  }
  return context.toast;
}

export function useToastServiceZustand(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  const showToast = useToastStore(state => state.showToast);
  const hideToast = useToastStore(state => state.hideToast);

  return {showToast, hideToast};
}
