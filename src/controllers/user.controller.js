import { getConenction } from '../database';
const dbTable = 'User';

//example of a get request
const getUsers = async (req, res) => {
  try {
    const connection = await getConenction();
    // all you need to do is to write the query on the next line
    // for the other controller functions just copy this one.
    const dbQuery = `SELECT * FROM ${dbTable}`;
    const result = await connection.query(dbQuery);
    res.json(result).status(200);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const connection = await getConenction();
    const dbQuery = `SELECT * FROM ${dbTable} WHERE id = ?`;
    const queryValues = [parseInt(req.params.userId)];
    const result = await connection.query(dbQuery, queryValues);
    res.json(result).status(200);
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
  }
};

const addUser = async (req, res) => {
  try {
    const connection = await getConenction();

    const { username, password, email } = req.body;
    const queryValues = [username, password, email];

    const dbQuery = `INSERT INTO ${dbTable}  
    (username, password, email)
    VALUES(?, ?, ?)
    RETURNING *`;

    const result = await connection.query(dbQuery, queryValues);
    res.json(result).status(200);
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const connection = await getConenction();
    const dbQuery = `DELETE FROM ${dbTable} WHERE id = ?`;
    const queryValues = [parseInt(req.params.userId)];
    const result = await connection.query(dbQuery, queryValues);
    res.json(result).status(200);
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
  }
};

export { getUsers, addUser, getUser, deleteUser };
