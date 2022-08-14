import {Router} from 'express'
import { getUsers, addUser, getUser, deleteUser } from '../controllers/user.controller';
const router = Router();

router.get('/getUsers', getUsers);
router.get('/getUser/:userId', getUser);
router.post('/addUser', addUser);
router.delete('/deleteUser/:userId', deleteUser);

export default router;