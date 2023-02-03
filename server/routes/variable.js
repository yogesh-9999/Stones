import express, { Router } from "express";

import { getvariable } from "../controller/variable.js";

const router = express.Router();
router.get('/', getvariable)


export default router;
