import { Router } from "express";

import { puzzleController } from './controllers/puzzleController.js';
import { userController } from "./controllers/userController.js";

const router = Router();

router.use('/puzzles', puzzleController);
router.use('/users', userController);

export { router };