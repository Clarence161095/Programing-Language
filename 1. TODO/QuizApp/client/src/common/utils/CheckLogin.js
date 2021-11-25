/* eslint-disable react-hooks/exhaustive-deps */
import { IsSignedIn, UserState } from 'common/states/SiderMenuState';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import auth from 'common/utils/FirebaseConfig';

export const getCurrentUserFirebase = async () => {
  const currentUser = auth.currentUser;
  if (currentUser)
    return {
      user: currentUser,
      token: await currentUser.getIdToken(),
    };

  // Not logged in
  const user_remember = localStorage.getItem('user');
  const token_remember = localStorage.getItem('token');
  if (!user_remember && !token_remember) return null;

  // Logged in but current user is not fetched --> wait (10s)
  return new Promise((resolve, reject) => {
    const waitTimer = setTimeout(() => {
      localStorage.clear();
      auth.signOut();
      reject({ response: { status: 408 } });
    }, 15000);

    const unregisterAuthObserver = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        reject(null);
      }

      const token = await user.getIdToken();
      resolve({
        user: user,
        token: token,
      });

      unregisterAuthObserver();
      clearTimeout(waitTimer);
    });
  });
};

export const SetLocalUser = async (user, token) => {
  const { uid, displayName, email, photoURL } = user;
  const user_remember = {
    uid: uid,
    displayName: displayName,
    email: email,
    photoURL: photoURL,
  };

  localStorage.setItem('user', JSON.stringify(user_remember));
  localStorage.setItem('token', token);
  return user_remember;
};

const CheckLogin = async () => {
  const setUser = useSetRecoilState(UserState);
  const setIsSignedIn = useSetRecoilState(IsSignedIn);

  useEffect(() => {
    const asynchronousFnc = async () => {
      const res = await getCurrentUserFirebase();
      if (res) {
        setIsSignedIn(!!res['token']);
        setUser(await SetLocalUser(res['user'], res['token']));
      }
    };

    asynchronousFnc();
  }, []);
};

export default CheckLogin;
