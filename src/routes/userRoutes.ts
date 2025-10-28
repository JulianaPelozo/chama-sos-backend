import { Router } from "express";
import { getUsers, getUserById } from "../controllers/userController";
import { verifyToken } from "../middleware/authMiddleware";

const router = Router();

router.get("/listalogins", verifyToken, getUsers);
router.get("/:id", verifyToken, getUserById);

export default router;
