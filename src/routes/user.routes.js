import {Router} from 'express'
import { dummyUsers } from '../controllers/user.controller';
const router = Router();

router.get('/users', dummyUsers)



export default router;