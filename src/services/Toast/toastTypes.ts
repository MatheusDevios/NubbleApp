export interface Toast {
  type?: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
  action?: {
    title: string;
    onPress: () => void;
  };
}

export interface ToastService {
  toast: Toast | null;
  showToast: (toast: Toast) => void;
  hideToast: () => void;
}
