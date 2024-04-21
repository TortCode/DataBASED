const db = require("./db.js");

const addPublication = async (data) => {
  const { title, year, medium, authorid, publisherid } = data;

  const sql =
    "INSERT INTO publication (Name, Publishing_Year, Medium, AID, CID) VALUES (?, ?, ?, ?, ?)";

  const result = await db.execute(sql, [
    title,
    year,
    medium,
    authorid,
    publisherid,
  ]);

  return { PID: result.insertId, ...data };
};

const findPublications = async (data) => {
  const { fname, minit, lname, publicationid, title, year, publisher, medium } =
    data;

  const params = {
    ["A.F_Name"]: fname,
    ["A.M_Init"]: minit,
    ["A.L_Name"]: lname,
    ["P.PID"]: publicationid,
    ["P.Name"]: title,
    ["P.Publishing_Year"]: year,
    ["PB.Name"]: publisher,
    ["P.Medium"]: medium,
  };

  const cleanedParams = Object.entries(params).filter(
    ([key, value]) => value !== undefined
  );

  const query = cleanedParams.map(([key, _]) => `${key} = ?`).join(" AND ");

  const sql =
    "SELECT * FROM publication AS P " +
    "JOIN author AS A on P.AID = A.AID " +
    "JOIN publisher AS PB on P.CID = PB.CID " +
    "WHERE " +
    query;

  return await db.execute(
    sql,
    cleanedParams.map(([_, value]) => value)
  );
};

const deletePublication = async (id) => {
  const sql = "DELETE FROM publication WHERE PID = ?";

  await db.execute(sql, [id]);
};

module.exports = {
  addPublication,
  findPublications,
  deletePublication,
};
