
import { getConenction } from "../database";

//example of a get request
const dummyUsers  = async (req, res) => {
try {
 const connection = await getConenction();
 // all you need to do is to write the query on the next line
 // for the other controller functions just copy this one.
 const result     = await connection.query(
    "SELECT * FROM  user"
 )
 res.json(result).status(200);
} catch(error) {s
    res.status(500)
    res.send(error.message)
}


}

export {dummyUsers}