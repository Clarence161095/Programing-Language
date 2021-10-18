module.exports = function chanel() {
  const store = {};

  return {
    create(name) {
      const chanel = {
        id: Date.now(),
        name: name,
        messages: [],
      };
      store[chanel.id] = chanel;
      return chanel;
    },
    getAll(id) {
      return store[id];
    },
    getLimit(id, limit) {
      const messages = store[id].messages.slice(0, limit);
      return {
        id: id,
        name: store[id].name,
        messages: messages,
      };
    },
    addMessages(id, message) {
      const data = {
        name: message.name && message.name != "" ? message.name : "#00000",
        message: message.message,
      };
      store[id].messages.push(data);
      return this.getLimit(id, 5000);
    },
    exists(id) {
      if (store[id]) {
        return this.getLimit(id, 5000);
      } else {
        return false;
      }
    },
  };
};
