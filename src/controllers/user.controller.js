import { getConenction } from '../database';
import Joi from 'joi';

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
    const schema = Joi.object({
      username: Joi.string().min(2).max(30).required(),
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ['com', 'net'] },
        })
        .required(),
      password: Joi.string().min(3).max(30).required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) {
      res.status(400);
      res.json({ error: error.details[0].message });
      return;
    }

    const connection = await getConenction();

    const { username, password, email } = value;
    const queryValues = [username, password, email];

    const dbQuery = `INSERT INTO ${dbTable}  
    (username, password, email)
    VALUES(?, ?, ?)
    RETURNING *`;

    const result = await connection.query(dbQuery, queryValues);
    res.json(result).status(200);
  } catch (error) {
    res.status(500);
    res.send(error.message);
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
    res.send(error.message);
  }
};

export { getUsers, addUser, getUser, deleteUser };
