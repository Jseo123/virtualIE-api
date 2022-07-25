
import { getConenction } from "../database";

//example of a get request
const dummyUsers  = async (req, res) => {
try {
 const connection = await getConenction();
 const result     = await connection.query(
    "SELECT * FROM  user"
 )
 res.json(result);
} catch(error) {
    res.status(500)
    res.send(error.message)
}


}

export {dummyUsers}