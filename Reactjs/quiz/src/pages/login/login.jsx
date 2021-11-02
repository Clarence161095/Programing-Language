import firebase from 'firebase/app';
import 'firebase/auth';
import { useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import local from '../../shared/store/local_storage';
import './login.scss';

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
  ],
};


function Login(props) {
  const token = localStorage.getItem('token')
  const user = local.getJSON('user')

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
        <div>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      </div>
    );
  }

  return (
    <div className='login'>
      <img className='avatar' src={user?.photoURL} alt={user?.displayName} />
      <p>{user?.displayName}!</p>
      <button className='login_logout' onClick={logout}>Sign-out</button>
    </div>
  );
}

export default Login;