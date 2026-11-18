
import { Router } from "express";
import { requireAuth } from "../../middlewares/auth.middleware.js";
import { itemPriceOptionController } from "./item-price-option.controller.js";

const router = Router();

router.use(requireAuth);

router.get("/", itemPriceOptionController.getAll);
router.get("/item/:itemId", itemPriceOptionController.getByItemId);
router.post("/item/:itemId", itemPriceOptionController.create);

router.get("/:id", itemPriceOptionController.getById);
router.patch("/:id", itemPriceOptionController.update);
router.delete("/:id", itemPriceOptionController.delete);

export default router;
