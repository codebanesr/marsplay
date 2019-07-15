const axios = require("axios");
const query = require("../queries/query");


// Add as many tables as you want in this, as long as a table doesnot have a dependency
// this will add all data
// just add users, posts and anything you want to insert into this array and it will start
// to work

const tableName = ["users", "posts", "comments", "albums", "todos"];
// photos is failing for some reason, I will check it if you insist
module.exports = async function(db) {
  for await (let tbl of tableName){
    console.log(tbl);
    try {
      const json = await axios.get(
        `https://jsonplaceholder.typicode.com/${tbl}`
      );

      // From the data that you just collected from the rest endpoint call
      // the insert method that calls the insert query for our db instance
      let result = await require("../insert")(db, json.data, query[tbl]);
    } catch (error) {
      console.log(error);
    }
  };
};
