const LocalStorageService = (
  function () {
    return {
      // GET: If you want to decode before getting from the local storage use these methods.
      getString(name: string) {
        if (localStorage.getItem(name)) {
          return localStorage.getItem(name);
        }
        return null;
      },
      getObject(name: string) {
        if (localStorage.getItem(name)) {
          return JSON.parse(localStorage.getItem(name) || '{}');
        }
        return null;
      },
      getDecodeString(name: string) {
        if (localStorage.getItem(name)) {
          var encodedStringAto = decodeURIComponent(escape(window.atob(localStorage.getItem(name) || '')));
          return encodedStringAto;
        }
        return null;
      },
      getDecodeObject(name: string) {
        if (localStorage.getItem(name)) {
          var encodedStringAto = decodeURIComponent(escape(window.atob(localStorage.getItem(name) || '')));
          return JSON.parse(encodedStringAto);
        }
        return null;
      },
      getBoolean(name: string) {
        if (localStorage.getItem(name)) {
          return localStorage.getItem(name) === 'true' ? true : false;
        }
        return false;
      },

      // SET: If you want to encode before saving to the local storage use these methods.
      setEncode(name: string, value: any) {
        let encodedStringBto: string;
        if (typeof value === 'object') {
          encodedStringBto = window.btoa(unescape(encodeURIComponent(JSON.stringify(value))))
        } else {
          encodedStringBto = window.btoa(unescape(encodeURIComponent(String(value))))
        }

        localStorage.setItem(name, encodedStringBto);
      },

      // REMOVE
      removeLogin() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('isLogin');
      },
    }
  })();

export default LocalStorageService;