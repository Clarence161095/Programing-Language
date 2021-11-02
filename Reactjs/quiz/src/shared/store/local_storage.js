const local = (
  function () {
    return {
      resetLogin() {
        localStorage.setItem('user', '');
        localStorage.setItem('token', '');
      },
      setToken(token) {
        localStorage.setItem('token', token);
      },
      setUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
      }
    }
  })();

export default local;