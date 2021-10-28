import axios from 'axios';
import queryString from 'query-string';
import firebase from 'firebase';

const getFirebaseToken = async () => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) return currentUser.getIdToken();

  // Not logged in
  const hasRememberedAccount = localStorage.getItem('firebaseui::rememberedAccounts');
  if (!hasRememberedAccount) return null;

  // Logged in but current user is not fetched --> wait (limit 10s)
  return new Promise((resolve, reject) => {
    // Sau 10s thì thực thiện blockcode này
    const waitTimer = setTimeout(() => {
      reject(null);
      console.log('Reject timeout');
    }, 10000);

    // Hàm này trả về hôm Funcion để Unsubrice onAuthStateChanged
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        reject(null);
      }

      const token = await user.getIdToken();
      console.log('[AXIOS] Logged in user token: ', token);
      resolve(token);

      // Sau khi có token thì không check onAuthStateChanged nữa
      unregisterAuthObserver();
      // Sau thời gian chờ đợi vẫn ko thực hiện blockcode Timeout
      clearTimeout(waitTimer);
    });
  });
}

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const token = await getFirebaseToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }

  return response;
}, (error) => {
  // Handle errors
  throw error;
});

export default axiosClient;