const db = require("./db.js");

const addPublication = async ({ title, year, medium, authorid, publisherid }) => {
  const data = { title, year, medium, authorid, publisherid };

  const sql =
    "INSERT INTO publication (Name, Publishing_Year, Medium, AID, CID) VALUES (?, ?, ?, ?, ?)";

  const result = await db.execute(sql, [
    title,
    year,
    medium,
    authorid,
    publisherid,
  ]);

  const sql2 = 
    "SELECT A.F_Name AS fname, A.M_Init AS minit, A.L_Name AS lname, P.PID AS publicationid, P.Name AS title, P.Publishing_Year AS year, PB.Name AS publisher " +
    "FROM publication AS P " +
    "JOIN author AS A on P.AID = A.AID " +
    "JOIN publisher AS PB on P.CID = PB.CID " +
    "WHERE P.PID = ?";

  return (await db.execute(sql2, [result.insertId]))[0];
};

const findPublications = async ({ fname, minit, lname, publicationid, title, year, publisher, medium }) => {

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
    ([key, value]) => value !== undefined && value !== null && value !== ""
  );

  let sql =
    "SELECT A.F_Name AS fname, A.M_Init AS minit, A.L_Name AS lname, P.PID AS publicationid, P.Name AS title, P.Publishing_Year AS year, PB.Name AS publisher " +
    "FROM publication AS P " +
    "JOIN author AS A on P.AID = A.AID " +
    "JOIN publisher AS PB on P.CID = PB.CID "

  if (cleanedParams.length > 0) {
    const query = cleanedParams.map(([key, _]) => {
      if (["A.F_Name", "A.M_Init", "A.L_Name", "P.Name", "PB.Name"].includes(key)) {
        return `${key} LIKE CONCAT('%', ?, '%')`;
      } else {
        return `${key} = ?`;
      }
    }).join(" AND ");

    sql += `WHERE ${query}`;
  }

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
