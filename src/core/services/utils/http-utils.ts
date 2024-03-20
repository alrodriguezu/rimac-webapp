import { AxiosError } from 'axios';
import { StorageService } from '../storage';

export const handleUnAuthResInterceptor = ({ response }: AxiosError<{ error?: string, message?: string }>) => {
  if (response?.status === 400 && response?.data.error === 'invalid_grant') {
    StorageService.clear();
    if (response.data.message !== 'Bad credentials') window.location.reload();
  }
  return Promise.reject(response);
};
