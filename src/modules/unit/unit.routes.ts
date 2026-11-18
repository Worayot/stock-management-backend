
import { Router } from "express";
import { requireAuth } from "../../middlewares/auth.middleware.js";
import { unitController } from "./unit.controller.js";

const router = Router();

router.use(requireAuth);

router.get("/", unitController.getAll);
router.get("/:id", unitController.getById);
router.post("/", unitController.create);
router.patch("/:id", unitController.update);
router.delete("/:id", unitController.delete);

export default router;
