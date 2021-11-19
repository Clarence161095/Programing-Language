import UserApi from 'api/UserApi';
import firebase from 'firebase/config';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import UserState, { IsSignedIn, Role } from 'store/UserState';
import LocalStorageService from './LocalStorageService';

export const getFirebaseToken = async () => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) return currentUser.getIdToken();

  // Not logged in
  const user_remember = localStorage.getItem('user');
  const token_remember = localStorage.getItem('token');
  if (!user_remember && !token_remember) return null;

  // Logged in but current user is not fetched --> wait (10s)
  return new Promise((resolve, reject) => {
    const waitTimer = setTimeout(() => {
      reject({ response: { status: 408 } });
    }, 12000);

    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user: any) => {
      if (!user) {
        reject(null);
      }

      const token = await user.getIdToken();
      resolve(token);

      unregisterAuthObserver();
      clearTimeout(waitTimer);
    });
  });
}

/**
 * Check Login Firebase Authentication. 
 * SetLocalUserState, setIsSignedInState, setUserState
 */
const CheckLogin = () => {
  const setUser = useSetRecoilState(UserState)
  const setIsSignedIn = useSetRecoilState(IsSignedIn)
  const setRole = useSetRecoilState(Role);

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user: any) => {
      if (!user) {
        LocalStorageService.removeLogin()
        firebase.auth().signOut()
        return;
      }
      setIsSignedIn(!!user)
      setUser(await SetLocalUser(user))
      await SetRole(setRole)
    });

    return () => unregisterAuthObserver();
    // eslint-disable-next-line
  }, []);
}

export const SetLocalUser = async (user: any) => {
  const firebase_token = await getFirebaseToken();

  const { uid, displayName, email, photoURL } = user;
  const user_remember = {
    uid: uid,
    displayName: displayName,
    email: email,
    photoURL: photoURL
  }

  LocalStorageService.setEncode('user', user_remember)
  LocalStorageService.setEncode('token', firebase_token)
  return user_remember;
}

export const SetRole = async (setRole: any) => {
  const local_user = LocalStorageService.getDecodeObject('user')
  const res: any = await UserApi.login(local_user);
  setRole(res.role)
}

export default CheckLogin;