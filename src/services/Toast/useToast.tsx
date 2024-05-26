import {ToastService} from '@services';

import {useToastContext} from './useToastContext';

export function useToast(): ToastService {
  return useToastContext();
}
