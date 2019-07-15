// ideally this should be present in an environment variable, i am doing it just
// so that you dont have to export and check it manually
const cn =
  "postgres://fchhltfc:vcyFNRGGWwzAIXdQPiTMXcEXz5nYAYLV@satao.db.elephantsql.com:5432/fchhltfc";

const connect = () => {
  const pgp = require("pg-promise")({ capSQL: true }); // capitalize all generated SQL);
  return pgp(cn); // database instance;
};

module.exports = connect;
