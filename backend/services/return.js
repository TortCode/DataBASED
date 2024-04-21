const db = require("./db.js");

const returnPublication = async ({ userid, libraryid, publicationid, pincode }) => {
  const userData = await db.execute(
    'SELECT * FROM user AS U ' +
    'WHERE U.UID = ? AND U.Pin = ?',
    [userid, pincode]
  );

  if (userData.length == 0) {
    throw new Error(`user or pincode is incorrect`);
  }

  const sql =
    "DELETE FROM checks_out " +
    "WHERE User_ID = ? AND Library_ID = ? AND Publication_ID = ?";
  await db.execute(sql, [userid, libraryid, publicationid]);
};

module.exports = {
  returnPublication,
};
