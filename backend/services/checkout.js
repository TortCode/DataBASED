const db = require("./db.js");

const checkout = async ({ userid, pincode, libraryid, publicationid }) => {

  const userData = await db.execute(
    'SELECT * FROM user AS U ' +
    'WHERE U.UID = ? AND U.Pin = ?',
    [userid, pincode]
  );

  if (userData.length == 0) {
    throw new Error(`user or pincode is incorrect`);
  }

  const sql = 'INSERT INTO checks_out(User_ID, Library_ID, Publication_ID) ' +
    'VALUES(?, ?, ?)';

  await db.execute(sql, [userid, libraryid, publicationid]);

  return { userid, libraryid, publicationid };
};

module.exports = {
  checkout,
};
