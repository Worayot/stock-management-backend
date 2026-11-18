import { Router } from "express";

import userRoutes from "./modules/user/user.routes.js";
import itemRoutes from "./modules/item/item.routes.js";
import itemPriceOptionRoutes from "./modules/item-price-option/item-price-option.routes.js";
import unitRoutes from "./modules/unit/unit.routes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/items", itemRoutes);
router.use("/item-price-options", itemPriceOptionRoutes);
router.use("/units", unitRoutes);

export default router;