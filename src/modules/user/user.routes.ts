import { Router } from "express";
import { userController } from "./user.controller.js";
import { requireAuth } from "../../middlewares/auth.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { updateUserSchema } from "./user.validation.js";

const router = Router();

router.use(requireAuth);

router.get("/me", userController.getMe);
router.patch("/me", validate(updateUserSchema), userController.updateMe);
router.delete("/me", userController.deleteMe);

export default router;