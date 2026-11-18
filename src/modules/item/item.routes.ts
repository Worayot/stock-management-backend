
import { Router } from "express";
import { itemController } from "./item.controller.js";
import { requireAuth } from "../../middlewares/auth.middleware.js";

const router = Router();

router.use(requireAuth);

router.get("/", itemController.getAll);
router.get("/:id", itemController.getById);
router.post("/", itemController.create);
router.patch("/:id", itemController.update);
router.delete("/:id", itemController.delete);

export default router;
