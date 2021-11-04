import firebase from 'firebase/app';
import 'firebase/auth';
import { useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import powerImg from '../../asset/images/login/power-button.png';
import local from '../../shared/store/local_storage';
import './login.scss';
import ReactTooltip from "react-tooltip";
import { useSetRecoilState } from 'recoil';
import { loginState } from '../../shared/store/login_state';

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
  const setLoginState = useSetRecoilState(loginState)
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
      setLoginState(local.getJSON('user'));
    });
    return () => unregisterAuthObserver();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = () => {
    if (window.confirm("Do you want to log out?")) {
      firebase.auth().signOut()
      local.resetLogin()
      window.location.reload();
    }
  }

  if (token === '' || user === {} || !user || !token) {
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
      <img className='sign_out' src={powerImg} alt='Sign-out' onClick={logout} data-tip="Sign-out" />
      <ReactTooltip className='sign_out_tooltip' place="bottom" type="error" effect="solid" />
    </div>
  );
}

export default Login;