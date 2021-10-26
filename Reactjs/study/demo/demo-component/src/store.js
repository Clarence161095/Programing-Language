function store() {
  const db = [];
  return {
    setData(data) {
      console.log(this.getAll());
      db.push(data);
    },
    getAll() {
      return db;
    },
  };
}

const db = store();

export default db;
