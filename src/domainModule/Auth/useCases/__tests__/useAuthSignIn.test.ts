import {renderHook, waitFor} from 'test-utils';

import {authService} from '../../authService';
import {useAuthSignIn} from '../useAuthSignIn';

import {mockedAuthCredentials} from './mockedData/mocks';

const mockedSaveCredentials = jest.fn();

jest.mock('@services', () => ({
  ...jest.requireActual('@services'),
  useAuthCredentials: () => ({saveCredentials: mockedSaveCredentials}),
}));

describe('useAuthSignIn', () => {
  it('saves credentials if the sign-in successfully', async () => {
    jest
      .spyOn(authService, 'signIn')
      .mockResolvedValueOnce(mockedAuthCredentials);

    const mockedOnSuccess = jest.fn();

    const {result} = renderHook(() =>
      useAuthSignIn({onSuccess: mockedOnSuccess}),
    );

    result.current.signIn({email: 'lucas@coffstack.com', password: '123'});

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(mockedSaveCredentials).toHaveBeenCalledWith(mockedAuthCredentials);
    expect(mockedOnSuccess).toHaveBeenCalledWith(mockedAuthCredentials);
  });
  it('calls the onError function with a message if sign-in fails', async () => {
    jest
      .spyOn(authService, 'signIn')
      .mockRejectedValueOnce(new Error('Invalid credentials'));

    const mockedOnError = jest.fn();

    const {result} = renderHook(() => useAuthSignIn({onError: mockedOnError}));

    result.current.signIn({email: 'lucas@coffstack.com', password: '123'});

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(mockedOnError).toHaveBeenCalledWith('Invalid credentials');
  });
});
