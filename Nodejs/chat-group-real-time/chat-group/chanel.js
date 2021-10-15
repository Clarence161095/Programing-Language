export function chanel() {
  const data = {};

  return {
    create(name) {
      const chanel = {
        id: Date.now(),
        name: name,
        messages: [],
      };
      this.data[chanel.id] = chanel;
      return chanel;
    },
    getAll(id) {
      return this.chanel[id];
    },
    getLimit(id, limit) {
      const messages = this.chanel[id].messages.slice(0, limit);
      return {
        ...this.chanel[id],
        messages: messages,
      };
    },
    addMessages(id, message) {
      const message = {
        name: message.name && message.name != "" ? message.name : "#00000",
        message: message.message,
      };
      this.chanel[id].messages.push(message);
      return this.getLimit(id, 5000);
    },
  };
}
