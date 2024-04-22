const db = require("./db.js");

const register = async (data) => {
  const { fname, lname, minit, email, pincode, phoneNos } = data;
  const conn = await db.getConnection();

  const insert_user_sql =
    "INSERT INTO user(Pin, Email, F_Name, M_Init, L_Name)" +
    "VALUES (?, ?, ?, ?, ?)";
  const [userInsertResult, _] = await conn.execute(insert_user_sql, [
    pincode,
    email,
    fname,
    minit,
    lname,
  ]);

  if (phoneNos.length > 0) {
    const insert_phonenos_sql =
      "INSERT INTO user_has_phone_no(UID, Phone_no) " +
      "VALUES " +
      phoneNos.map((_) => `(${userInsertResult.insertId}, ?)`).join(", ");
    await conn.execute(insert_phonenos_sql, phoneNos);
  }

  await conn.end();

  return { userid: userInsertResult.insertId, ...data };
};

module.exports = {
  register,
};
