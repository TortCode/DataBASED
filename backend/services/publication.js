const db = require('./db.js');

const findPublications = async (data) => {
    const { fname, minit, lname, pid, title, year, publisher, medium } = data;

    const params = {
        ['A.F_Name']: fname,
        ['A.M_Init']: minit,
        ['A.L_Name']: lname,
        ['P.PID']: pid,
        ['P.Name']: title,
        ['P.Publishing_Year']: year,
        ['PB.Name']: publisher,
        ['P.Medium']: medium,
    }

    const cleanedParams = Object.entries(params).filter(([key, value]) => value !== undefined);

    const query = cleanedParams.map(([key, _]) => `${key} = ?`).join(' AND ');


    const sql = 
    'SELECT * FROM publication AS P ' +
    'JOIN author AS A on P.AID = A.AID ' +
    'JOIN publisher AS PB on P.CID = PB.CID ' +
    'WHERE ' + query;

    return await db.execute(sql, cleanedParams.map(([_, value]) => value));
};