import {Router} from 'express'
import { dummyUser } from '../controllers/user.controller';
const router = Router();

router.get('/user', dummyUser)



export default router;