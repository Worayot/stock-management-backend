import { registry } from "../../config/openapi.js";
import { z } from "zod";

const UnitSchema = z.object({
    id: z.string(),
    unit: z.string()
});

registry.register("Unit", UnitSchema);

registry.registerPath({
    method: "get",
    path: "/api/units",
    tags: ["Units"],
    summary: "Get all units",
    responses: {
        200: {
            description: "Units retrieved successfully"
        }
    }
});

registry.registerPath({
    method: "post",
    path: "/api/units",
    tags: ["Units"],
    summary: "Create a unit",
    request: {
        body: {
            content: {
                "application/json": {
                    schema: UnitSchema
                }
            }
        }
    },
    responses: {
        201: {
            description: "Unit created successfully"
        }
    }
});