import { registry } from "../../config/openapi.js";
import { z } from "zod";

const ItemSchema = z.object({
    id: z.string(),
    categoryType: z.enum(["Discrete", "Continuous"]),
    unitId: z.string(),
    quantity: z.string()
});

const CreateItemSchema = z.object({
    categoryType: z.enum(["Discrete", "Continuous"]),
    unitId: z.string(),
    quantity: z.string()
});

registry.register("Item", ItemSchema);
registry.register("CreateItem", CreateItemSchema);

// GET /api/items
registry.registerPath({
    method: "get",
    path: "/api/items",
    tags: ["Items"],
    summary: "Get all items",
    responses: {
        200: {
            description: "Items retrieved successfully"
        }
    }
});

// POST /api/items
registry.registerPath({
    method: "post",
    path: "/api/items",
    tags: ["Items"],
    summary: "Create an item",
    request: {
        body: {
            content: {
                "application/json": {
                    schema: CreateItemSchema
                }
            }
        }
    },
    responses: {
        201: {
            description: "Item created successfully"
        }
    }
});