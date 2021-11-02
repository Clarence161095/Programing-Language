import firebase from 'firebase/app';
import 'firebase/auth';
import { useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import local from '../../shared/store/local_storage';

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyD_T9_bZHWkCtzN8ZgSBSPDb3AaVchdjAM',
  authDomain: 'login-jwt-demo.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/Login',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
};


function Login(props) {
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        console.log('User is not logged in');
        local.resetLogin()
        return;
      }

      local.setUser(user);
      local.setToken(await user.getIdToken());
    });
    return () => unregisterAuthObserver();
  }, []);

  const logout = () => {
    firebase.auth().signOut()
    local.resetLogin()
    window.location.reload();
  }

  if (token === '' || user === '' || !user || !token) {
    return (
      <div className='login'>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }

  return (
    <div className='login'>
      <p>Welcome {JSON.parse(user)?.displayName}!</p>
      <button onClick={logout}>Sign-out</button>
    </div>
  );
}

export default Login;