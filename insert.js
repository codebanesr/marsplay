module.exports = async function(db, values, query) {
  debugger;
  const result = await db.tx(t => {
    try {
      const queries = values.map(l => {
        return t.none(query, l);
      });
      return t.batch(queries);
    } catch (err) {
      console.log("error occured in insert...");
    }
  });
};
