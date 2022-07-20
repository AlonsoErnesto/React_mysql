import { Router } from 'express';
import { 
  getTasks,
  getTask,
  putTask, 
  deleteTask,
  postTask 
} from '../controllers/tasks.controllers.js';

const router = Router();

router.get('/tasks',getTasks);
router.get('/tasks/:id',getTask);
router.post('/tasks',postTask);
router.put('/tasks/:id', putTask);
router.delete('/tasks/:id',deleteTask);



export default router;
