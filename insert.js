/**It takes three parameters the connection object, what values you want to insert
 * and a query string. It will then match the query string with the json object's array
 * and batch all queries and execute them. We are going the async route because I didnot
 * spend time figuring out the dependency graph......
 * 
 * Speed can furthur be increased...
 */
module.exports = async function (db, values, query) {
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
